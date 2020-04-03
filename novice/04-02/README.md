# 04-02

Judul : Lebih Lanjut Dengan Vue.js (2)

Oleh : Aulia Putri Utami

Tanggal : 31 Maret 2020

Ringkasan Materi :

- Reusability & Composition

  - Mixins

    Mixins adalah sebuah cara yang fleksibel untuk mendistribusikan beberapan fungsi yang bisa dipakai disemua komponen Vue. Objek pada mixin bisa berisi beberapa opsi dikomponen. Ketike sebuah komponen menggunakan mixin, maka semua opsi yang ada didalam mixin akan di gabungkan dengan opsi komponen itu sendiri. Contoh :

                //mendefinisikan object mixin
                var myMixin = {
                created: function () {
                    this.hello()
                },
                methods: {
                    hello: function () {
                    console.log('hai, ini mixin!')
                    }
                }
                }

                // definisikan sebuah komponen yang menggunakan mixin
                var Component = Vue.extend({
                mixins: [myMixin]
                })

                var component = new Component() // => "hai, ini mixin!"

  - Custom Directives

    - Hook Function

      Objek definisi direktif dapat menyediakan beberapa fungsi kait (semua opsional):

      - bind: dipanggil hanya sekali, saat direktif partama kali terikat dengan elemen. Di sini Anda dapat melakukan pekerjaan pengaturan satu kali.
       
      - inserted: dipanggil ketika elemen terikat telah dimasukkan ke dalam node induknya.
      
      - update: dipanggil ketika komponen yang memuat VNode telah diperbarui, tetapi mungkin sebelum anak-anaknya diperbarui.
      
      - componentUpdated: dipanggil setelah komponen yang memuat VNode dan VNodes anak-anaknya telah diperbarui.
      
      - unbind: dipanggil hanya sekali, ketika direktif terlepas dari elemennya.

    - Directive Hook Arguments

      Kait direktif dioper argumen ini:
      
      - el: Elemen dimana direktif terikat. Ini dapat digunakan secara langsung untuk memanipulasi DOM.
      
      - binding: Objek yang berisi properti berikut.
      
        - name: Nama direktif, tanpa awalan v-.
        
        - value: Nilai yang dioper ke direktif. Misalnya pada v-my-directive="1 + 1", nilainya akan menjadi 2.
        
        - oldValue: Nilai sebelumnya, hanya tersedia pada update dan componentUpdated. Tersedia apakah nilai telah berubah atau tidak.
        
        - expression: Ekspresi dari binding sebagai string. Misalnya pada v-my-directive="1 + 1", ekspresi akan menjadi "1 + 1".
        
        - arg: Argumen yang dioper ke direktif, jika ada. Misalnya pada v-my-directive:foo, argumen akan menjandi "foo".
        
        - modifiers: Objek yang memuat pengubah, jika ada. Misalnya pada v-my-directive.foo.bar, objek pengubah menjadi { foo: true, bar: true }.
        
        - vnode: Node virtual yang dibuat oleh penyusun Vue. Lihat API VNode untuk detil lebih lengkap.
        
        - oldVnode: Virtual node sebelumnya, hanya tersedia pada kait update dan componentUpdated.

        Contoh :

                Vue.directive('demo', {
                    bind: function (el, binding, vnode) {
                    var s = JSON.stringify
                    el.innerHTML =
                    'name: '       + s(binding.name) + '<br>' +
                    'value: '      + s(binding.value) + '<br>' +
                    'expression: ' + s(binding.expression) + '<br>' +
                    'argument: '   + s(binding.arg) + '<br>' +
                    'modifiers: '  + s(binding.modifiers) + '<br>' +
                    'vnode keys: ' + Object.keys(vnode).join(', ')
                }
                })

                new Vue({
                el: '#hook-arguments-example',
                data: {
                    message: 'hello!'
                }
                })
        
  - Tooling
    
    - Single File Component
      
      Single File Component digunakan untuk mengerjakan projek besar. Pada kebanyakan proyek Vue, komponen global akan didefinisikan menggunakan `Vue.component` diikuti dengan new `Vue {{e: 'container'}}`. Ini dapat bekerja denan sangat baik untuk proyek skala kecil hingga menengah. Namun untuk proyek yang lebih komplek atau ketika *frontend* diatur sepenuhnya oleh JavaScript terdapat kekurangan-kekurangan yang muncul, yaitu definisi global, tempalt string, tidak ada dukungan CSS, dan tidak ada build step. Semua masalah tersebut dapat teratasi dengan Single File Componen berekstensi `.vue`.


      

    
