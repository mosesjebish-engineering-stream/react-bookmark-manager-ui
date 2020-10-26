class CreateCardRequest extends ReactAxiom.Model {
    static defaultState() {
        return {
            shortUrl: '',
            longUrl: '',
            userId: '',
            tribe: '',
            application: '',
            platform: '',
            description: '',
            groupName: ''
        };
}