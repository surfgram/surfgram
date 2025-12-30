import { ChecklistTasksDone } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChecklistTasksDone', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      checklist_message: {} as any,
      marked_as_done_task_ids: [123],
      marked_as_not_done_task_ids: [123],
    };

    const instance = new ChecklistTasksDone(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.checklistMessage ?? instance.raw?.checklist_message).toEqual({} as any);
    expect(instance.markedAsDoneTaskIds ?? instance.raw?.marked_as_done_task_ids).toEqual([123]);
    expect(instance.markedAsNotDoneTaskIds ?? instance.raw?.marked_as_not_done_task_ids).toEqual([123]);
  });
});