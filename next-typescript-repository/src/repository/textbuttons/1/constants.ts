import { AlertType } from "./interface";

export const SUCCESS_ALERT: Alert = {
    id: 1,
    type: AlertType.Success,
    message: 'Operation successful!',
};

export const WARNING_ALERT: Alert = {
    id: 2,
    type: AlertType.Warning,
    message: 'Warning: Proceed with caution.',
};

export const DANGER_ALERT: Alert = {
    id: 3,
    type: AlertType.Danger,
    message: 'Error: Operation failed.',
};

export const INFO_ALERT: Alert = {
    id: 4,
    type: AlertType.Info,
    message: 'Info: Additional information.',
};