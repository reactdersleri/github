# React Dersleri Github Kullanım Rehberi

Bu belge, GitHub kullanımıyla ilgili giriş seviyesinde bir tanıtım amacıyla hazırlanmıştır.

## GitHub nedir?

Git, yazılım sektöründe versiyon kontrolü amacıyla kullanılan en popüler servislerden bir tanesidir. GitHub ise bu servisin bulut versiyonudur, yani kodlarınızı uzak bir sunucuda Git sistemiyle saklamanıza yardımcı olur.

GitHub komut satırını kullanırken kullanabileceğiniz yüzlerce komut vardır. Daha kapsamlı bir rehber için [şu rehbere](https://github.com/joshnh/Git-Commands) bakabilirsiniz. Daha ayrıntılı komutlar için Google'da `github commands` araması yapabilirsiniz.

Şimdi GitHub kullanırken sık kullanılan bazı terimlere bakalım.

[![Alt text](https://img.youtube.com/vi/fnxi12JLhNY/0.jpg)](https://www.youtube.com/watch?v=fnxi12JLhNY)


## Sık Kullanılan GitHub Terimleri

### Repository

Kelime anlamı: depo, veri deposu, veri havuzu.

Projenin bütün dosya ve klasörlerini içinde tutan veritabanı gibi düşünülebilir. Her bir proje, GitHub'da bir repository olarak tutulabilir. Sadece dosyalar değil, dosyalarda yapılan değişikliklerin geçmişi de burada tutulur.

Bir repository birden fazla kullanıcı arasında paylaşılabilir ve kopyalanabilir (bkz: fork).

### Branch

Kelime anlamı: dal, şube, ayırmak.

Projeye yeni bir özellik eklenmek istendiğinde ya da bir değişiklik yapılacağı zaman, yeni bir branch açılır ve bütün değişiklikler bu branch üzerinde yapıldıktan sonra master branch ile birleştirilir (bkz: merge).

### Fork

Kelime anlamı: çatal, çatallanmak.

Başka birisine ait bir repository üzerinde çalışmak istediğinizde projeyi kendi GitHub hesabınıza kopyalamak için onu fork edebilirsiniz. Fork edilen projeler, projenin aslında bir güncelleme olduğunda bu değişikliklerden etkilenmezler.

Kendi hesabınıza kaydetmek istediğiniz projenin GitHub sayfasında sağ üst köşedeki Fork butonuna basarak fork işlemini gerçekleştirebilirsiniz.

### Clone

Kelime anlamı: kopyalamak, klonlamak.

Bir projeyi bilgisayarınıza indirmek istediğinizde clone komutunu kullanabilirsiniz.

Terminal'e `git clone https://github.com/reactdersleri/github.git` yazıp gönderdiğinizde, `github` isimli proje, o an bulunduğunuz dizinde `github` ismiyle oluşturulan klasörün içine kopyalanacaktır. Bir repository'e ait clone linkine ulaşmak için, projenin GitHub sayfasında sağ taraftaki yeşil `Clone or download` butonuna basarak yahut projenin linkinin sonuna `.git` uzantısını koyarak erişebilirsiniz.

## Kullanıcı Bilgileri Ayarları

### `git config --global user.email "emailadresiniz@orneksite.com`

Bu komut ile yerelde yaptığınız değişikliklerin hangi GitHub hesabı ile ilişkilendirileceğini ayarlayabilirsiniz.

## Sık Kullanılan GitHub Komutları

Bir önceki derste bilgisayarımıza Git Bash kurmuştuk. Şimdi Git Bash komut satırını kullanarak GitHub projeleri nasıl klonlanır, değişiklikler nasıl kaydedilir, gibi sorulara cevap niteliğindeki bazı komutlara bakalım.

### `git status`

Bu komut, repository'nin mevcut durumunu gösterir. Eğer projede değişiklik yapılmış ancak işlenmemiş (bkz: commit) veya işlenmiş değişiklikler görüntülenebilir.

Örnek bir `git status` komutuna gelen cevap:

    $ git status
    On branch master
    Your branch is up to date with 'origin/master'.

    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
            modified:   README.md

    no changes added to commit (use "git add" and/or "git commit -a")

### `git add .`

Bu komut değişen tüm dosyaları GitHub'a göndermek üzere hazırlar (staging). En sondaki nokta, tüm dosyaları ifade eder. Buraya nokta yerine dosya veya klasör ismi de yazabilirsiniz.

### `git commit -m [commit mesaji]`

Bu komut ile, bir önceki aşamada hazırlanan değişiklikler, bir mesaj ile birlikte yereldeki (localhost) repository'e kaydedilir. Mesaj kısmı, projede yapılan değişiklikleri açıklayıcı olmalıdır.

Örnek: `git commit -m "Header'daki yazım hatası giderildi."`

### `git push origin [branch ismi]`

Bu komut ile, yerelde hazırlanıp kaydedilen değişiklikler, GitHub'daki repository'e gönderilir.

Takım çalışmalarında branch ismi önemlidir. Takımın her bir üyesi, kendi ismiyle yahut üzerinde çalıştığı özelliği açıklayıcı bir branch oluşturmalıdır. Bu branch'a kaydedilen değişiklikler bir `pull request` oluşturularak master branch ile birleştirilmek üzere takım liderinin onayına sunulmalıdır. Böylece hatalı (buggy) kodların gözden geçirilmeden ana ürün olarak sunulmasının önüne geçilecektir.

    NOT: İlk push işlemini gerçekleştirdiğinizde, bir pencere açılacak ve buradan GitHub'a giriş yapmanız istenecektir.

### `git checkout -b [branch ismi]`

Belirtilen isimle yeni bir branch oluşturur.

### `git checkout [branch name]`

Belirtilen isimdeki branch'a geçiş yapar.

    NOT: Visual Studio Code ile çalışırken, sol alt köşede üzerinde çalıştığınız branch ismini görebilirsiniz.
