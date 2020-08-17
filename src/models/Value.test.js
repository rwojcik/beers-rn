import { Value } from './Value';

it('creates Value instance', () => {
    const volume = Value.create({
        value: 0,
        unit: 'kg',
    });

    expect(volume.value).toBe(0);
    expect(volume.unit).toBe('kg');
});

it('throws on invalid Value model', () => {
    expect(() => {
        Value.create({});
    }).toThrow();
});
