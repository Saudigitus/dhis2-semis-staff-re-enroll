import { IconCheckmarkCircle16, Tag } from "@dhis2/ui";
import styles from "./modal.module.css";
import { ModalComponent, SummaryCard } from "dhis2-semis-components";

const SummaryModalContent = ({ created, conflicts, open, handleCloseModal }
    : { created: number, conflicts: number, open: boolean, handleCloseModal: () => void }) => {
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
                <span style={{ color: "red" }}>The following staffs were not re-enrolled. They already exist on the selected academic year</span>
            </div>
        </ModalComponent>
    )
}

export default SummaryModalContent