<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>DATA KATEGORI CHECKLIST</h4>
                        <button type ="button" class="btn btn-success">Tambah Data</button>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Item</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(checklist, index) in checklists" :key="index">
                                    <td>{{ checklist.nama_item }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'checklist.edit', params:{id: checklist.id }}" class="btn btn-sm btn-primary mr-1">Edit</router-link>
                                        <button class="btn btn-sm btn-danger ml-1">Hapus</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let checklists = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/checklist')
            .then(response => {
              
              //assign state checklists with response data
              checklists.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //return
        return {
            checklists
            
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>
