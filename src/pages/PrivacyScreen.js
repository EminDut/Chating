import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

function PrivacyScreen() {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <Text style={Styles.title}>Gizlikik Politikası</Text>

        <Text style={Styles.case}>
          Gizlilik politikası web sitelemiz LOGİCHAT ve Google play ve Apple
          store yer alan uygulamarımız için geçerlidir. Basit olması için,
          hepsine bu Gizlilik Politikasında “hizmetlerimiz” olarak atıfta
          bulunuruz. Bazı servislerimiz kendi özellinde benzersiz gizlilik
          politikalarını gerektirebilir. Belirli bir hizmetin kendi gizlilik
          politikası varsa, o politika mevcut okumakta olduğunuz gizliliik
          politikaları kapsamı dışında kalır.
        </Text>

        <Text style={Styles.title}>
          Faydalandığınız Hizmetler Kapsamında Hangi Bilgileri Toplarız.
        </Text>

        <Text style={Styles.case}>
          Hizmetlerimizi kullanırken bize belirli bilgileri vermeyi kabul etmek
          durumda kalırsınız. Bunlar şunları içerir:
        </Text>

        <Text style={Styles.case}>
          -- Bir hesap oluşturduğunuzda, bize en azından giriş bilgilerinizi ve
          hizmetin çalışması için cinsiyetiniz ve doğum tarihiniz gibi gerekli
          bazı temel bilgileri sağlarsınız.
        </Text>

        <Text style={Styles.case}>
          -- Profilinizi tamamladığınızda, kişiliğinizle ilgili ayrıntılar,
          yaşam tarzı, ilgi alanları ve sizinle ilgili diğer ayrıntılar gibi ek
          bilgileri, ayrıca fotoğraf içerikleri paylaşabilirsiniz. Fotoğraf
          paylaşmak için veya belirli bir içerik eklemek için kamera veya
          fotoğraf albümünüze erişmemize izin verebilirsiniz. Bize sağlamayı
          seçtiğiniz bilgilerin bir kısmı, örneğin yargı veya etnik
          kökenleriniz, cinsel yöneliminiz ve dini inançlarınız gibi belirli
          ülkelerde “özel” veya “hassas” olarak kabul edilebilir. Bu bilgiyi
          vermeyi seçerek, bu bilgiyi işlememize izin vermiş olursunuz.
        </Text>

        <Text style={Styles.case}>
          -- Yönetici ekibimize başvurursanız veya teknik bir sorun için bizimle
          iletişime geçerseniz, etkileşim sırasında bize verdiğiniz bilgileri
          sorun çözmek için toplarız. Size daha kaliteli bir hizmet sunmak için
          bazen bu etkileşimleri eğitim amaçlı izler veya kaydederiz.
        </Text>

        <Text style={Styles.case}>
          -- Sohbet hizmetlerinin bir parçası olarak yayınladığınız profil
          içeriğinin yanı sıra diğer kullanıcılarla olan sohbetleriniz de siz
          silmediğiniz sürece profilinizle ilişkilendirerek arşivleriz.
        </Text>

        <Text style={Styles.case}>
          -- Servislerimizi kullandığınızda, hangi özellikleri kullandığınız,
          bunları nasıl kullandığınız ve servislerimize erişmek için
          kullandığınız cihazlar hakkında bilgi topluyoruz.
        </Text>

        <Text style={Styles.case}>
          -- Hizmetlerimizdeki etkinliğiniz hakkında, örneğin bunları nasıl
          kullandığınız (örneğin, giriş yapmış olduğunuz tarih ve saat,
          kullandığınız özellikler, aramalar, tıklamalar ve size gösterilen
          sayfalar, web sayfası adresine atıfta bulunma) hakkında bilgi
          topluyoruz.Ve diğer kullanıcılarla nasıl etkileşimde bulunduğunuz
          (örneğin, bağlantı kurduğunuz ve etkileşimde olduğunuz kullanıcılar,
          sohbet başlatma tarihi, gönderdiğiniz ve aldığınız mesajların sayısı).
        </Text>

        <Text style={Styles.case}>
          -- IP adresi, cihaz kimliği ve türü, aygıta özgü ve uygulama ayarları
          ve özellikleri, uygulama çökmeleri gibi donanım ve yazılım bilgileri
          cihazınızın ayarlarına), tarayıcı türüne, sürümüne ve diline, işletim
          sistemine, saat dilimine, cihazınızı veya tarayıcınızı benzersiz
          şekilde tanımlayabilecek çerezler veya diğer teknolojilerle ilişkili
          tanımlayıcılar (örneğin, IMEI / UDID ve MAC adresi); servis
          sağlayıcınız ve sinyal gücü gibi kablosuz ve mobil ağ bağlantınızla
          ilgili bilgiler size daha iyi hizmet vermek için saklanabilir.
        </Text>

        <Text style={Styles.title}>Bilgilerin İşlenmesi Ve Kullanılması</Text>

        <Text style={Styles.case}>
          -- Bilgilerinizi kullanmamızın temel nedeni size sunduğumuz
          hizmetlerin kalitesini artırmak ve iyileştirmektir. Ayrıca,
          bilgilerinizi sizi güvende tutmak herhangi bir siber zorbalığa maruz
          kaldığınız durumlarda yasal işlem başlatmak için arşivleriz. Diğer
          kullanıcılarla bağlantı kurmanız ve popüler kullanıcılar listesine
          girmeniz için verileriniz belirli bir algoritma kapsamında kullanırız.
          Çoklu platformlarda sohbet geçmişinize ulaşmanız için siz silmediğiniz
          sürece sohbet geçmişiniz sunucumuzda saklarız.
        </Text>

        <Text style={Styles.case}>
          -- Kullanıcılarımızın kendi aralarında gerçekleştirdikleri sohbet
          içeriğinde yer alan mesajlar, gönderilen ve alınan resimler,
          kaydedilen sesli mesajlar dahil olmak üzere, söz konusu sohbetin
          taraflardan en az birinin şikayet etmesi halinde moderatör ekibi
          tarafından incelenmesine izin vermiş olursunuz.
        </Text>

        <Text style={Styles.case}>
          -- Tamamen veya kısmen bir birleşme, satış, devralma, elden çıkarma,
          yeniden yapılandırma, yeniden düzenleme, tasfiye, iflas veya diğer
          mülkiyet veya kontrol değişikliğine gitmek durumda kaldığımızda,
          bilgilerinizi yeni firma yetkilerine aktarabiliriz.
        </Text>

        <Text style={Styles.case}>
          -- Bilgilerinizi şu durumlarda kısmen veya tamamen ifşa etmemiz
          gerekebilir: mahkeme emri, mahkeme celbi veya arama emri, devlet /
          yasa uygulama soruşturması veya diğer yasal gereklilikler gibi yasal
          bir sürece uymak; suç veya suça karışan kimselerin suçun önlenmesine
          veya tespitine yardımcı olmak için (her durumda geçerli yasaya tabi);
          veya herhangi bir kişinin güvenliğini sağlamak amacıyla kurumlarla
          paylaşabiliriz. Yasa kapsamında kuvvet kolluklarına bilgi vermemiz
          gerekeceği durumlar öngördüğümüzde, sohbet geçmişiniz kullanıcı
          tarafından silinse dahi belirli bir süre sunucularımızda
          arşivleyebiliriz.
        </Text>

        <Text style={Styles.case}>
          -- Bilgilerinizi şu durumlarda paylaşmamız gerekebilir: ifşa fiili
          veya tehdit altındaki bir davada sorumluluğumuzu azaltabileceği
          durumlarda. Kullanıcılarımızın, iş ortaklarımızın veya diğer ilgili
          tarafların yasal haklarımızı ve yasal haklarını korumak için gerekli
          olduğu takdirde; Sizinle olan anlaşmalarımızı uygulamak; ve yasa dışı
          faaliyetler, şüpheli dolandırıcılık veya diğer yanlış işlemler
          hakkında soruşturma kapsamında bilgilerinizi paylaşmak durumunda
          kalırız.
        </Text>

        <Text style={Styles.title}>Yaş Sınırlaması</Text>

        <Text style={Styles.case}>
          -- Hizmetlerimiz 18 yaş ve üstü kullanıcılar ile sınırlıdır.
          Platformumuzda 18 yaşın altındaki kullanıcıların izin vermiyoruz ve 18
          yaşın altındaki hiç kimseden bilerek kişisel bilgi toplamıyoruz. Bir
          kullanıcının 18 yaşın altında olduğundan şüpheleniyorsanız, bunu bize
          bildirmek için iletişim formumuzu kullanın.
        </Text>

        <Text style={Styles.ase}>Son Güncelleme: 21 Ağustos 2023</Text>
      </ScrollView>
    </View>
  );
}

export default PrivacyScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  case: {
    fontSize: 15,
    marginBottom: 10,
  },
});
