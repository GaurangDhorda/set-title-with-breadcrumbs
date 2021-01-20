import { IBreadCrums } from "./breadcrumbs";

export interface IUrlTitle {
    url: string;
    title: string;
    breadCrums?: IBreadCrums[];
}