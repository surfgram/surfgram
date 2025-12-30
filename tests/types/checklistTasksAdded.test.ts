import { ChecklistTasksAdded } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChecklistTasksAdded', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      checklist_message: {} as any,
      tasks: [{} as any],
    };

    const instance = new ChecklistTasksAdded(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.checklistMessage ?? instance.raw?.checklist_message).toEqual({} as any);
    expect(instance.tasks ?? instance.raw?.tasks).toEqual([{} as any]);
  });
});
