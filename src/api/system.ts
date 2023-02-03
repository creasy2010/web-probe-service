import {IHttpClient} from "./http";

/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/

export class System {

    static build(httpClient: IHttpClient) {
        return new System(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    async login(username: string, password: string): Promise<{
        user: {
            id: number;
            sex: number;
            name: string;
            tag: string;
        }
    }> {
        let loginResult = await this.httpClient.post('/login', {
            phone: username,
            password: password
        });
        return loginResult;
    }

    async getUserInfo() {
        return await this.httpClient.post('/login', {
            "User": {
                "id": 82001,
            },
            "[]": {
                "Comment": {
                    "userId@": "User/id"
                }
            }
        });
    }


    async logout(username: string, password: string) {
        let logoutResult = await this.httpClient.post('/logout');
        this.httpClient.setCookie('');
        return logoutResult;
    }
}
