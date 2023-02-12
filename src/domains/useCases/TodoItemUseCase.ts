import UseCaseError from '../../errors/UseCaseError';
import { Result } from '../../utils/resultType';
import { TodoItemUseCaseRequestDTO, TodoItemUseCaseResponseDTO } from './dto/todoItem';

export default interface TodoItemUseCase {
  getAllTodoItems(): Promise<Result<TodoItemUseCaseResponseDTO[], UseCaseError>>;
  createNewTodoItem(values: TodoItemUseCaseRequestDTO): Promise<Result<TodoItemUseCaseResponseDTO, UseCaseError>>;
  modifyTodoItem(
    id: string,
    modifiedValue: Partial<TodoItemUseCaseRequestDTO>
  ): Promise<Result<TodoItemUseCaseResponseDTO, UseCaseError>>;
  finishTodoItem(id: string): Promise<Result<TodoItemUseCaseResponseDTO, UseCaseError>>;
  incompleteTodoItem(id: string): Promise<Result<TodoItemUseCaseResponseDTO, UseCaseError>>;
  deleteTodoItem(id: string): Promise<Result<string, UseCaseError>>;
}
