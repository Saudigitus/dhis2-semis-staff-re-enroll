import React, { useState } from 'react'
import { IconAddCircle24, Button, ButtonStrip } from "@dhis2/ui";
import Tooltip from '@material-ui/core/Tooltip';
import styles from './enrollmentActionsButtons.module.css'
import { useGetSectionTypeLabel, useUrlParams } from 'dhis2-semis-functions';
import ModalManager from '../modal/ModalManager';
import { RowSelectionState } from '../../schemas/selectedStaffsSchema';
import { useRecoilState } from 'recoil';

function EnrollmentActionsButtons() {
    const { urlParameters } = useUrlParams();
    const { school: orgUnit } = urlParameters();
    const { sectionName } = useGetSectionTypeLabel();
    const [openSaveModal, setOpenSaveModal] = useState<boolean>(false)
    const [selected, _] = useRecoilState(RowSelectionState)


    return (
        <div className={styles.container}>
            <ButtonStrip className={styles.work_buttons}>
                <Tooltip title={orgUnit === null ? "Please select an organisation unit before" : ""}
                    onClick={() => setOpenSaveModal(true)}
                >
                    <span>
                        <Button disabled={selected?.length == 0} icon={<IconAddCircle24 />}>
                            <span className={styles.work_buttons_text}>Perform staff {sectionName.toLocaleLowerCase()} re-enroll</span>
                        </Button>
                    </span>
                </Tooltip>

                {openSaveModal && <ModalManager open={openSaveModal} setOpen={setOpenSaveModal} saveMode='CREATE' />}
            </ButtonStrip>

        </div>
    )
}

export default EnrollmentActionsButtons
