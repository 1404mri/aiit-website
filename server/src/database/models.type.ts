import * as ContactModel from "../modules/contact_management/models/model";
import * as ErrorTraceModel from "../modules/system_management/models/error_trace.model";

export type model_types = {
    ContactModel: typeof ContactModel.DataModel;
    ErrorTraceModel: typeof ErrorTraceModel.DataModel;
}