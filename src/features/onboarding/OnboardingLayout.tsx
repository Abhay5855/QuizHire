import { useState } from 'react';
import RoleSelection from './RoleSelection';
import { Card, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import InterviewPreferencesStep from './InterviewPreferencesStep';

const OnboardingLayout = () => {
	const [step, setStep] = useState<number>(1);
	const [selectedRole, setSelectedRole] = useState<string>('');

	const nextStep = () => {
		setStep(step + 1);
	};

	const previousStep = () => {
		setStep(step - 1);
	};

	const handleRoleSelection = (role: string) => {
		setSelectedRole(role);
	};

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<RoleSelection
						nextStep={nextStep}
						handleRoleSelection={handleRoleSelection}
						selectedRole={selectedRole}
					/>
				);
			case 2:
				return <InterviewPreferencesStep />;
		}
	};

	return (
		<>
			<div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
				<Card className="max-w-4xl rounded-lg shadow-lg p-8">
					<CardContent className="flex">
						<section>{renderStep()}</section>
					</CardContent>
					<CardFooter
						className={`flex items-center mt-4 ${step > 1 ? 'justify-between' : 'justify-end'}`}
					>
						{step > 1 && (
							<Button variant="outline" onClick={previousStep}>
								<ArrowLeft /> Back
							</Button>
						)}
						<Button variant="default" size="default" onClick={nextStep}>
							{step === 2 ? 'Finish Up' : 'Continue'}
							<ArrowRight />
						</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default OnboardingLayout;
