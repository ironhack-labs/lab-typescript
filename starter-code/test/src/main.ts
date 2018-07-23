import {Two} from "./two";
import {SocialNetwork} from './social-network';

class App implements SocialNetwork{

    title = "Eggheads";

    getUsers(){
        return [{name:"bliss"}];
    }
}

new App();
new Two();