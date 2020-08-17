import { types } from 'mobx-state-tree';

export const Value = types.model('Value', {
    value: types.number,
    unit: types.string,
});
