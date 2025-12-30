import { Checklist } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Checklist', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      title: 'example text',
      title_entities: [{} as any],
      tasks: [{} as any],
      others_can_add_tasks: true,
      others_can_mark_tasks_as_done: true,
    };

    const instance = new Checklist(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.titleEntities ?? instance.raw?.title_entities).toEqual([{} as any]);
    expect(instance.tasks ?? instance.raw?.tasks).toEqual([{} as any]);
    expect(instance.othersCanAddTasks ?? instance.raw?.others_can_add_tasks).toEqual(true);
    expect(
      instance.othersCanMarkTasksAsDone ?? instance.raw?.others_can_mark_tasks_as_done
    ).toEqual(true);
  });
});
