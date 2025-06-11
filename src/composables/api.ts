import { ref } from 'vue'

const personData = ref();
const API_TOKEN = 'e2160631373ed806e316cc2252dfd44a27ea795de8113b55e7f143899e55b7ec5a5cc3525775937dce878cdfdf725a278a5f813911ebd5e14662f8223410e14907303d4c3bb47c1631198a2c85afb531b1f4b2a3ecd03632e375e49f9e8cc6e4b225345f58163f59b012b114028cc8b530365e1524e43d8e05dd0e4346fba457'

const headers = {
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
};


const BASE_URL = 'http://localhost:1337';

const getImgSrc = (src: string) => `${BASE_URL}${src}`

async function getData() {
    try {
        const response = await fetch(BASE_URL + '/api/people?populate=photo', headers);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result: any = await response.json();
        personData.value = result?.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('фиаско')
        }
    }
}

export { personData, getData, getImgSrc }