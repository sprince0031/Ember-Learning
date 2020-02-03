import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['Ada Lovelace', 'Charles Babbage', 'Alan Turing'];
    }
}
