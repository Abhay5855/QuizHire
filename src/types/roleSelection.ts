import { Dispatch, SetStateAction } from "react";

export interface FormData{
	role:string,
	usecase: string,
	company_size: string,
	platform?: string
}

export interface RoleSelection {
	company?: string;
	companySize?: string;
	designation?: string;
	experience?: string;
	nextStep: () => void;
	handleRoleSelection: (role: string) => void;
	selectedRole: string;
	formData: FormData;
	setFormData: Dispatch<SetStateAction<FormData>>;
}

export interface Role {
	id: number;
	name: string;
}
