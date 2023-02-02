export default abstract class AbsBaseTask {

    abstract run():Promise<void>;

    abstract get key():string;

}
