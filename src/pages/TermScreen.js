import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

function TermScreen() {
  return (
    <View
      style={Styles.container}>

      <ScrollView>

        <Text style={Styles.title}>
          Kullanım Şartları
        </Text>
        <Text style={Styles.case}>

         -- Logi chat de karşıdaki kullanıcıların kimliğini siz görürsünüz ancak
          siz istemediğiniz sürece karşıdaki kullanıcılar sizin kimliğinizi
          göremez. LogiChat’de katıldığınızda Türkiye'nin dört bir yanından,
          kullanıcılardan oluşan bir topluluğun parçası olursunuz. LogiChat
          platformunun eğlenceli ve keyifli kalmasını sağlamak için bazı
          topluluk kurallarımız vardır. Topluluk kurallarımız ile herkes için
          seviyeli ve güvenli bir ortam oluşturmayı amaçlarız. LogiChat de
          gördüğünüz her içeriği sevmeyebilirsiniz. İçeriğin uygunsuz olduğunu
          düşünüyorsanız, yönetici ekibimizin incelemesi için şikayet veya geri
          bildirim özelliğini kullanabilirsiniz. Ekibimiz, gönderilen şikayet ve
          geri bildirimleri, topluluk kurallarımızı ihlal edip etmediğini
          belirlemek için 7/24 dikkatli bir şekilde incelemektedir. Sizi
          sorunlardan uzak tutacak bazı kuralları hatırlatmak isteriz. Lütfen bu
          kuralları ciddiye alın ve benimseyin. Bu kuralları anlamanız ve
          gerekçelerine saygı duymanız, platformumuzun seviyesini korumak için
          önemlidir. --
        </Text>

        <Text style={Styles.title}>


          Profil Politikaları


        </Text>
        <Text style={Styles.case}>
         -- Aşağıdaki öğelerden herhangi birini içeren bir içeriği profilinizde
          yayınlamayın. --
        </Text>
        <Text style={Styles.title}>

          
          Profil Fotoğrafları


        </Text>

        <Text style={Styles.case}>
          *_* Cinsel doyum amacıyla cinsel organ, göğüs veya kalça (giyinik veya
          çıplak) gösterimi
        </Text>
        <Text style={Styles.case}>
          *_* Cinsel doyum amacıyla cinsel eylemler, cinsel organlar veya
          fetişler gösteren pornografi
        </Text>
        <Text style={Styles.case}>
          *_* Amacın cinsel tatmin olduğu şiddet içeren, sansürsüz veya küçük
          düşürücü fetiş içerik
        </Text>
        <Text style={Styles.case}>
          *_* Cinsel tatmin amacıyla açık ya da örtük cinsel ilişki görüntüsü
        </Text>
        <Text style={Styles.case}>
          *_* Canlandırılmış (karikatür şeklinde) cinsel ilişki, pornografi veya
          fetiş içerik Kişilerin kendilerine ya da başkalarına zarar verdiğini
          gösteren içerik
        </Text>
        <Text style={Styles.case}>
          *_* Başka birini taklit etmek amacıyla yüklenen kendinize ait olmayan
          gerçek profil fotoğrafları
        </Text>

        <Text style={Styles.title}>


          Profil İsimleri Ve Kullanıcı Adı URL’leri


           </Text>

           <Text style={Styles.case}>
           -- Aşağıdaki öğelerden herhangi birini içeren bir içeriği profil linki veya isim soyisim olarak kullanmayın. --
           </Text>

           <Text style={Styles.case}>
            *_* Küfür ve argo sözcükler kullanılan içerikler
            </Text>


         <Text style={Styles.case}>
            *_* Vücudun belirli bölümleri veya cinsel ilişkiyi çağrıştıran
            müstehcen içerikler
            </Text>


         <Text style={Styles.case}>
            *_* Kendinize ait olsa dahi marka veya ticari işletme isimlerinden
            oluşan içerikler
            </Text>
     

        
        <Text style={Styles.title}>




          Profil Biyografi Detayları





        </Text>
        <Text style={Styles.case}>
          -- Kısaca kendinizden bahsedebileceğiniz biyografi alanına bunları
          yazmaktan kaçının. --
          </Text>
          <Text style={Styles.case}>
          *_* Kokain veya opioidler gibi keyif verici maddelerin
          kullanımına teşvik edecek övgü içeren içerikler Finansal destek adı
          altında cinsel ilişki daveti içeren içerikler
          </Text>
          <Text style={Styles.case}>
          *_* Yetişkinlere yönelik etkinliklere, yetişkin randevularına veya pornografiye davet eden
          içerikler 
        
          </Text>
          <Text style={Styles.case}>
          *_* Din ve siyaset konuları hakkında taraf veya karşıt içerikler
          </Text>
          <Text style={Styles.case}>
          *_* Ahlaka aykırı veya müstehcen dil veya aşırı küfür içeren içerikler
          </Text>
          <Text style={Styles.case}>
          *_* Kendine veya başkalarına zarar vermeye yönelik teşvik edici içerikler
          </Text>
          <Text style={Styles.case}>
          Açık adres, özel e-posta adresi, özel telefon numarası, tc kimlik
          numarası, pasaport numarası veya banka hesap bilgisi gibi kişisel
          bilgilerini ifşa eden içerikler
          </Text>

       
        <Text style={Styles.title}>




          İçeriklerim bu politikayı ihlal ettiğinde ne olur ?




        </Text>
        <Text style = {Styles.case}>
          İçerikleriniz den herhangi birisi politikalarımızı ihlal ederse,
          ihlale sebep olan söz konusu içeriği kaldırabiliriz ve bunu size
          bildirmek için bir e-posta göndeririz. Topluluk Kurallarımızı ihlal
          eden bir içeriği ilk kez yayınladı isenız hesabınız kalıcı olarak
          askıya alınmadan sadece uyarı alırsınız. Politikalarımızı tekrar
          tekrar ihlal eden iyi niyetli olmadığını düşündüğümüz hesapları kalıcı
          olarak askıya alırız. İhlale sebep olan içeriğiniz (ilk ihlaliniz bile
          olsa) kullanıcı URL’leri kapsamında ise URL değişimi mümkün olmadığı
          için hesabınız kalıcı olarak askıya alınır.
        </Text>
        <Text style={Styles.title}>
          
          
          Chat Politikası
          
          
          </Text>


        <Text style={Styles.case}>
          Aşağıda listelenen kuralları ihlal eden yazışma kayıtlarını bildirme
          konusunda LogiChat kullanıcı topluluğuna güveniyoruz. Şikayet ve
          geri bildirim işlemi anonim olarak kayıt altına alındığından dolayı
          şikayet edilen kullanıcılar kim tarafından şikayet edildiği konusunda
          herhangi bir bilgiye ulaşamazlar. 
          </Text>
          <Text style={Styles.case}>
          -- Anonim veya hesabınız açık şekilde bir kullanıcı ile iletişim kurarken şunları yapmayın. --
          İlk mesajınızda
          doğrudan küfür veya hakaret içeren mesajlar
          </Text>
          <Text style={Styles.case}>
          *_* Cinsel doyum amacıyla sexting içeren mesajlar 
          </Text>
          <Text style={Styles.case}>
          *_* Karşıdaki kullanıcıdan herhangi birşey karşılığında ücret talep eden mesajlar 
          </Text>
          <Text style={Styles.case}>
          *_* Diğer chat platformlarına davet eden reklam amaçlı mesajlar
          </Text>
          <Text style={Styles.case}>
          *_* Hızlıca zengin olma planları veya saadet  zincirleri (somut bir ürün olmaksızın zincirleme olarak para gönderilmesi) talep edilen mesajlar.
          </Text>
          <Text style={Styles.case}>
          *_* Seçim dönemi olmasa dahi seçmenlerin oylarını değiştirmek için düşüncelerine müdahale etmeyi amaçlayan mesajlar 
          </Text>
          <Text style={Styles.case}>
          *_* Reklam amaçlı kişisel web sitenizin tanıtımını  yapan link içeren mesajlar 
          </Text>

          <Text style={Styles.case}>
          *_* Fazla miktarlarda aynı hedefli olmayan veya tekrarlanan mesajlar 

          </Text>
          <Text style={Styles.case}>
         -- Kişilerin birbirleri ile rızası dahilinde küfürlü
          veya argo konuşması topluluk kurallarımızı ihlal etmez, iki tarafın
          birbirlerinin rızası olduğu taktirde iletişimde kullanılan jargonun
          içeriği topluluk politikamızın kapsamı dışında kalır. --
        </Text>
        <Text style={Styles.title}>


          Pasif Hesap Politikası

          
        </Text>
        <Text style={Styles.case}>
          Genel olarak, kullanıcıların LogiChat topluluğu içinde mesajlaşan
          etkin üyeler olmaları beklenir. Bir hesabın uzun süre etkin olmadığı
          fark edilirse, hesap LogiChat yöneticileri tarafından herhangi bir
          bildirimde bulunulmadan geri alınabilir.
          </Text>
          <Text style={Styles.case}>

          Aşağıdaki durumlarda hesabın etkin olmadığı kabul edilebilir. 
          </Text>
          <Text style={Styles.case}>
          Siteye veya uygulamamıza en az altı aydır giriş yapmamış hesaplar 
          </Text>

          <Text style={Styles.case}>
          Hiçkimse ye mesaj yazmamış veya kendisine mesaj yazılmamış pasif hesaplar 
          </Text>
          <Text style={{fontSize: 15,marginBottom: 10}}>
          Bazı diğer kullanıcıları profillerini takip etmek (stalk’lamak) amacıyla açılmış hesaplar
          </Text>


        

        <Text style={Styles.title}>



          Taklit Politikası



        </Text>
        <Text style={Styles.case}>
          Bir kişi sizin veya bir tanıdığınızı taklit eden bir profil
          oluşturduğunu düşünüyorsanız bunu bize bildirmeniz halinde hesap
          kalıcı olarak askıya alınır. Şikayetçi olduğunuz hesap üzerinde işlem
          yapmamız için sizden bazı ek bilgiler talep edebiliriz.
          </Text>


          <Text style={{fontSize: 15,marginBottom:10,}}>

        Son Güncelleme: 17 Ağustos 2023
          
        </Text>
      </ScrollView>
    </View>
  );
}
export default TermScreen;




const Styles = StyleSheet.create({

  container : { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }, 

  title : {
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10,

      },
  
  case : {
        fontSize: 15,
        marginBottom: 10,

    
  }



 

})


