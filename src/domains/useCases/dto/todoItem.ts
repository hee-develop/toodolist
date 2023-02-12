export interface TodoItemUseCaseRequestDTO {
  title: string;
  detail: string;
  dueDate?: string;
  isFinished: boolean;
}

export interface TodoItemUseCaseResponseDTO {
  id: string;
  title: string;
  detail: string;
  dueDate: string | null;
  createdAt: string;
  isFinished: boolean;
}
