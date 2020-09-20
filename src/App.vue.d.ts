import { Vue } from 'vue-property-decorator';
export default class App extends Vue {
    test(): Promise<string>;
    beforeMount(): Promise<void>;
}
