<template>
    <div >
        <div class="text-gray-600 bg-white w-full shadow py-2 my-1 rounded-b-lg" style="position: sticky;">
        <div class="px-4 flex flex-wrap mb-6 justify-between items-center pt-3">
            <div class="lg:w-1/4 w-full">
            <p class="text-gray-700 text-3xl text-start font-serif">Calculator</p>
            </div>
            <div class="lg:w-1/3 w-full">
            <input type="text" class="bg-gray-200 text-black form-text-input w-full px-4 focus:outline-none focus:border-indigo-700 rounded-md" placeholder="Type here to search..." >
            <a style="position: absolute;right: 24px; top: 30px; font-size: 16px;"><i class="fas fa-search"></i></a>
            </div>
        </div>
        </div>
        <div class="mx-10 px-8">
        <div class="grid grid-cols-3 gap-4 mt-12">
            <div class="w-full rounded p-3  bg-white shadow">
            <div class=" ">

                <p class="font-bold text-2xl text-gray-700 ">Inkoop</p>
                <br>
                <hr class="mb-6">
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base  lg:w-1/2  float-left" style="line-height: 40px">Aantal producten afgenomen</label>
                <input type="number" class="form-text-input mt-4 w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" v-model.number="inkoop1" placeholder="Aantal producten afgenomen">
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Inkoop ex btw</label>
                <input type="number" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" v-model.number="inkoop2" placeholder="Inkoop ex btw">
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Transport ex btw</label>
                <input type="number" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" v-model.number="inkoop3" placeholder="Transport ex btw">
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Verpakking ex btw</label>

                <input type="number" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" v-model.number="inkoop4" placeholder="Verpakking ex btw">
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Transactie ex btw</label>

                <input type="number" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700"  v-model.number="inkoop5" placeholder="Transactie ex btw">
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Overige kosten ex btw</label>

                <input type="number" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" v-model.number="inkoop6" placeholder="Overige kosten ex btw">
                </div>
            </div>
            </div>
             <div class="w-full  rounded p-3  bg-white shadow">
            <div class="">

                <p class="font-bold   text-2xl text-gray-700 ">Verkoop</p>
                <br>
                <hr class="mb-6">
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Verkoopprijs per stuk</label>
                <input type="number" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700"  v-model.number="verkoop1" placeholder="">
                </div>

                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Bol.com verkoop categorie</label>

                <select class="form-control form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700"  v-model="selected_categorie">
                        <option v-for="(categorie) in categories" :value="categorie" :key="categorie">
                            <p class="text-gray-700">
                                {{ categorie.name }}
                                </p>
                        </option>
                    </select>
                </div>

                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Bemiddelingsbijdrage</label>
                <input type="text" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" :value="selected_categorie.vast | currency" placeholder="" disabled>
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Bemiddelingsbijdrage %</label>
                <input type="text" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" :value="Math.round(selected_categorie.variabele * 10000)/100 + '%'" placeholder="" disabled>
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base   float-left" style="line-height: 40px">BTW tarief</label>
                <select class="form-control form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" v-model.number="verkoop5">
                        <option value="0.00">
                            0%
                        </option>
                         <option value="0.09">
                            9%
                        </option>
                         <option value="0.21">
                            21%
                        </option>
                    </select>
                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">LVB kosten in euro's</label>
                <input type="text" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" :value="verkoop7 | currency" placeholder="" disabled>

                </div>
                <div class="account-settings-form">
                <label  class="form-label text-gray-700 text-base    float-left" style="line-height: 40px">Overige kosten inc. BTW</label>
                <input type="number" class="form-text-input w-2/5 float-right px-4 focus:outline-none focus:border-indigo-700" v-model.number="verkoop8" placeholder="">
                </div>
             </div>
            </div>

            <div class="w-full text-white rounded p-3  bg-white shadow">
            <div class="">
                 <input type="text" class="text-black form-text-input w-2/5 px-4 focus:outline-none focus:border-indigo-700" placeholder="Naam" v-model="titel" name="" id="">
                 <button  class=" text-white p-2 mx-2 rounded mb-2 text-center cursor-pointer bg-indigo-900"><i class="fas fa-save"></i></button>
                 <div>
                <table class="table-responsive-full sort-table rounded-lg  bg-white lg:w-full">
                    <thead>
                        <tr class="border-b border-gray-600 bg-gray-800">
                            <th class="py-2 text-left text-base font-normal text-white px-4">First</th>
                            <th class="py-2 text-left text-base font-normal text-white">Last</th>
                            <th class="py-2 text-left text-base font-normal text-white">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in dummy" :key="index" class="border-b border-gray-600 hover:bg-gray-200 text-gray-700">
                            <td class="py-2 px-4">{{item.name}}</td>
                            <td>{{item.last}}</td>
                            <td class="text-indigo-800">{{item.handle}}</td>
                        </tr>
                    </tbody>
                </table>
                 </div>
                </div>
            </div>
        </div>

         <div class="p-6 pt-3">
            <div class=" rounded py-4 px-4 shadow informatiebox">
            <table id="content-table3" class="table-responsive-full sort-table rounded-lg shadow bg-white lg:w-full ">
            <thead>
                <tr class="bg-gray-800 text-white hover:bg-white hover:text-gray-700" style="transition: all .3s ease-in-out">
                    <th class="productinformatie p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Winst/verlies marge</p>
                    </div>
                    </th>
                    <th class="productinformatie p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Winst/verlies marge</p>
                    </div>
                    </th>
                    <th class="productinformatie p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Winst/verlies marge</p>
                    </div>
                    </th>
                    <th class="productinformatie p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Winst/kosten</p>
                    </div>
                    </th>
                    <th class="productinformatie p-4">
                    <div class="flex justify-between items-center">
                        <p class="mr-2 text-base">Winst/winst_verlie</p>
                    </div>
                    </th>

                </tr>
            </thead>
            <tbody>
                    <tr v-for="calculation in calculations" :key="calculation" class="text-center text-gray-700" >
                        <td class="py-3" data-label="Titel">{{calculation.titel}}</td>
                        <td data-label="Inkoop">{{calculation.inkoop}}</td>
                        <td data-label="Omzet">{{calculation.omzet | currency}}</td>
                        <td data-label="Kosten">{{calculation.kosten | currency}}</td>
                        <td data-label="Winst/verlies">{{calculation.winst_verlies | currency}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      titel: '',
      kosten: '',
      inkoop1: 0,
      inkoop2: 0,
      inkoop3: 0,
      inkoop4: 0,
      inkoop5: 0,
      inkoop6: 0,
      verkoop1: 0,
      verkoop2: 0,
      verkoop3: 0,
      verkoop4: 0,
      verkoop5: 0,
      verkoop6: 0,
      verkoop7: 0,
      verkoop8: 0,
      resultaten1: 0,
      resultaten2: 0,
      resultaten3: 0,
      resultaten4: 0,
      resultaten5: 0,
      resultaten6: 0,
      resultaten7: 0,
      resultaten8: 0,
      resultaten9: 0,
      resultaten10: 0,
      resultaten11: 0,
      resultaten12: 0,
      winstmarge: 0,
      winst_verlies: 0,
      hidden: false,
      totaal: 0,
      lvb_tarief: {
      },
      calculations: [
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' },
        { titel: 'Mark', inkoop: 'ottp', omzet: '510$', kosten: '450', winst_verlies: '445' }
      ],
      dummy: [
        { titel: 'Mark', last: 'ottp', handle: '@mdo' },
        { name: 'Jacob', last: 'Thornton', handle: '@fat' },
        { name: 'Larry', last: 'the Bird', handle: '@twitter' },
        { name: 'Jacob', last: 'Thornton', handle: '@fat' },
        { name: 'Larry', last: 'the Bird', handle: '@twitter' },
        { name: 'Jacob', last: 'Thornton', handle: '@fat' },
        { name: 'Larry', last: 'the Bird', handle: '@twitter' },
        { name: 'Jacob', last: 'Thornton', handle: '@fat' },
        { name: 'Larry', last: 'the Bird', handle: '@twitter' },
        { name: 'Jacob', last: 'Thornton', handle: '@fat' },
        { name: 'Larry', last: 'the Bird', handle: '@twitter' }
      ],

      categories: [
        { name: 'category-1' },
        { name: 'category-2' },
        { name: 'category-3' },
        { name: 'category-4' },
        { name: 'category-5' }
      ],
      selected_categorie: {
        vast: 0,
        variabele: 0
      },
      selected_verzendtarief: {}
    }
  },
  methods: {

  }

}

</script>
<style>
.account-settings-form {
    margin-bottom: 16px;
    overflow: auto;
}
.form-text-input {
    border-radius: 3px;
    border: solid 1px #d8e0e3;
    height: 40px;
    line-height: 40px;
}
</style>
