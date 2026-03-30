import { Given, When, Then, Before } from 'vitest-cucumber-plugin';
import { expect, vi } from 'vitest';
import { AlumniManager } from '../../src/features/alumni/scripts/alumniManager';

let alumniManager;

Before(() => {
    alumniManager = new AlumniManager();
    vi.stubGlobal('fetch', vi.fn());
});

Given('the alumni API returns a list of {int} alumni', (state, [count]) => {
    const mockAlumni = Array.from({ length: Number(count) }, (_, i) => ({
        id: i + 1,
        firstName: i === 0 ? 'Juan' : 'Other',
        lastName: 'Narowe',
        title: 'Developer',
        stack: ['React'],
        availability: 'Looking for a job',
        imageUrl: '',
        location: 'Barcelona'
    }));

    fetch.mockResolvedValue({
        ok: true,
        json: async () => mockAlumni,
    });

    return state;
});

When('I load the alumni data', async (state) => {
    await alumniManager.loadAlumni();
    return state;
});

Then('I should have {int} alumni in the manager', (state, [count]) => {
    expect(alumniManager.getAllAlumni().length).toBe(Number(count));
    return state;
});

Then('the first alumnus first name should be {string}', (state, [firstName]) => {
    expect(alumniManager.getAllAlumni()[0].firstName).toBe(firstName);
    return state;
});

Given('I have loaded the alumni data with id {int} and first name {string}', async (state, [id, firstName]) => {
    const singleAlumnus = {
        id: Number(id),
        firstName: firstName,
        lastName: 'Narowe',
        title: 'Developer',
        stack: ['React'],
        availability: 'Looking for a job',
        imageUrl: '',
        location: 'Barcelona'
    };

    fetch.mockResolvedValue({
        ok: true,
        json: async () => [singleAlumnus],
    });

    await alumniManager.loadAlumni();
    return state;
});

When('I retrieve the alumnus with ID {int}', (state, [id]) => {
    // Logic is in the Then step check
    return state;
});

Then('I should get an alumnus with first name {string}', (state, [firstName]) => {
    const alumnus = alumniManager.getAlumniById(1);
    expect(alumnus).toBeDefined();
    expect(alumnus.firstName).toBe(firstName);
    return state;
});
