export interface Alert {
    id: number;
    type: AlertType;
    message: string;
}

export enum AlertType {
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
    Info = 'info',
}