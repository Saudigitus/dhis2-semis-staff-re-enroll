import { Button, ButtonStrip, IconCheckmarkCircle16, Tag } from "@dhis2/ui";
import styles from "./modal.module.css";
import { ModalComponent, SummaryCard, Table, useDataStoreKey, useProgramsKeys } from "dhis2-semis-components";
import { InfoOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Collapse } from "@material-ui/core";
import { useHeader } from "dhis2-semis-functions";
import { Modules, ProgramConfig } from "dhis2-semis-types";

const SummaryModalContent = ({ created, conflicts, open, handleCloseModal, conflictDetails }
    : { created: number, conflicts: number, open: boolean, handleCloseModal: () => void, conflictDetails: any }) => {
    const dataStoreData = useDataStoreKey({ sectionType: "staff" });
    const programsValues = useProgramsKeys();
    const programData = programsValues[1]
    const [pagination, setPagination] = useState({ page: 1, pageSize: 10, totalPages: 10 })
    const { columns } = useHeader({ dataStoreData, programConfigData: programData as unknown as ProgramConfig, tableColumns: [], module: Modules.Enrollment });

    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <ModalComponent
            open={open}
            handleClose={handleCloseModal}
            title={`Bulk Staff Re-enroll Summary`}
        >
            <div>
                <Tag positive icon={<IconCheckmarkCircle16 />} className={styles.tagContainer}>Staffs re-enroll preview </Tag>
                <div className={styles.sumarry}>
                    <SummaryCard color="success" label="Promoted Staffs" value={created} />
                    <SummaryCard color="error" label="Non Promoted Staffs" value={conflicts} />
                </div>
                <br />
                {
                    conflicts > 0 && <>
                        <ButtonStrip>
                            <Button small icon={<InfoOutlined className={styles.infoIcon} />} onClick={handleShowDetails}>More details</Button>
                        </ButtonStrip>
                        <br />
                        <span style={{ color: "red" }}>The following staffs were not re-enrolled. They already exist on the selected academic year</span>
                        <Collapse in={showDetails}>
                            <div className={styles.detailsContainer}>
                                <Table
                                    programConfig={programData}
                                    title="Non promoted staffs"
                                    columns={columns}
                                    pagination={pagination}
                                    setPagination={setPagination}
                                    tableData={conflictDetails}
                                    sortable={false}
                                />
                            </div>
                        </Collapse>
                    </>
                }
            </div>
        </ModalComponent>
    )
}

export default SummaryModalContent