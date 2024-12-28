export interface RoleFormData {
	roleName: string;
	usecase: string;
	company_size: string;
	platform?: string;
	interview: string;
}

export interface RoleSelection {
	company?: string;
	companySize?: string;
	designation?: string;
	experience?: string;
	nextStep?: () => void;
	handleRoleSelection: (role: string) => void;
	selectedRole: string;
}

export interface Role {
	id: number;
	name: string;
}
