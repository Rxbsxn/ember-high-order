import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name: faker.name.firstName,
    age: 12
});
