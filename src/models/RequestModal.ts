export interface RequestModal {
    type: TypeModal;
    cursor: number;
}

export type TypeModal = 'listNum' | 'listDash';