import React, { useState } from 'react';

const Components = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (menuKey) => {
    setDropdownStates(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const Header = () => (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img 
            src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/%D0%9A%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%96%D0%B5%D0%BB%D1%8F%D0%B7%D0%BE-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0-%D0%BC%D0%B0%D0%B3%D0%B8%D1%8F.jpg" 
            alt="КоВаНа МАГИЯ Logo" 
            className="logo-image"
          />
          <div className="logo-text">
            <h1>КоВаНа МАГИЯ</h1>
            <p className="logo-subtitle">Ковано Желязо</p>
          </div>
        </div>
      </div>
    </header>
  );

  const Sidebar = () => (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img 
          src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/%D0%9A%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%96%D0%B5%D0%BB%D1%8F%D0%B7%D0%BE-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0-%D0%BC%D0%B0%D0%B3%D0%B8%D1%8F.jpg"
          alt="КоВаНа МАГИЯ"
          className="sidebar-logo-img"
        />
      </div>
      <nav className="sidebar-nav">
        <h3>КоВаНа МАГИЯ</h3>
        <ul>
          <li onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>
            Ковано Желязо – КоВаНа МАГИЯ
          </li>
          <li onClick={() => setActiveSection('what-is')} className={activeSection === 'what-is' ? 'active' : ''}>
            Какво е ковано желязо?
          </li>
          
          <li className="dropdown-menu">
            <div className="dropdown-header" onClick={() => toggleDropdown('furniture')}>
              <span>Мебели от ковано желязо</span>
              <span className={`dropdown-arrow ${dropdownStates.furniture ? 'open' : ''}`}>▼</span>
            </div>
            {dropdownStates.furniture && (
              <ul className="dropdown-content">
                <li onClick={() => setActiveSection('beds')}>Спални от ковано желязо и от метал</li>
                <li onClick={() => setActiveSection('tables')}>Маси от ковано желязо и от метал</li>
                <li onClick={() => setActiveSection('lamps')}>Лампи от ковано желязо</li>
                <li onClick={() => setActiveSection('mirrors')}>Огледала от ковано желязо</li>
              </ul>
            )}
          </li>

          <li className="dropdown-menu">
            <div className="dropdown-header" onClick={() => toggleDropdown('lighting')}>
              <span>Осветителни тела от ковано желязо</span>
              <span className={`dropdown-arrow ${dropdownStates.lighting ? 'open' : ''}`}>▼</span>
            </div>
            {dropdownStates.lighting && (
              <ul className="dropdown-content">
                <li onClick={() => setActiveSection('chandeliers')}>Полилеи от ковано желязо</li>
                <li onClick={() => setActiveSection('wall-lamps')}>Лампи от ковано желязо</li>
                <li onClick={() => setActiveSection('lanterns')}>Фенери от ковано желязо</li>
              </ul>
            )}
          </li>

          <li className="dropdown-menu">
            <div className="dropdown-header" onClick={() => toggleDropdown('accessories')}>
              <span>Аксесоари от ковано желязо</span>
              <span className={`dropdown-arrow ${dropdownStates.accessories ? 'open' : ''}`}>▼</span>
            </div>
            {dropdownStates.accessories && (
              <ul className="dropdown-content">
                <li onClick={() => setActiveSection('garden-furniture')}>Градински мебели от ковано желязо</li>
              </ul>
            )}
          </li>

          <li className="dropdown-menu">
            <div className="dropdown-header" onClick={() => toggleDropdown('gates')}>
              <span>Врати от ковано желязо</span>
              <span className={`dropdown-arrow ${dropdownStates.gates ? 'open' : ''}`}>▼</span>
            </div>
            {dropdownStates.gates && (
              <ul className="dropdown-content">
                <li onClick={() => setActiveSection('entrance-gates')}>Входни врати от ковано желязо</li>
              </ul>
            )}
          </li>

          <li onClick={() => setActiveSection('railings')} className={activeSection === 'railings' ? 'active' : ''}>
            Парапети от ковано желязо
          </li>

          <li onClick={() => setActiveSection('terraces')} className={activeSection === 'terraces' ? 'active' : ''}>
            Тераси от ковано желязо
          </li>

          <li onClick={() => setActiveSection('fences')} className={activeSection === 'fences' ? 'active' : ''}>
            Огради от ковано желязо
          </li>

          <li onClick={() => setActiveSection('imitations')} className={activeSection === 'imitations' ? 'active' : ''}>
            Решетки от ковано желязо
          </li>

          <li onClick={() => setActiveSection('ornaments')} className={activeSection === 'ornaments' ? 'active' : ''}>
            Орнаменти от ковано желязо
          </li>

          <li onClick={() => setActiveSection('industrial')} className={activeSection === 'industrial' ? 'active' : ''}>
            Индустриален стил
          </li>

          <li onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
            Контакти
          </li>
        </ul>
      </nav>
    </aside>
  );

  const MainContent = () => {
    const renderContent = () => {
      switch(activeSection) {
        case 'what-is':
          return (
            <div className="content-section what-is-section">
              <h2>Ковано желязо – КоВаНа Магия – Какво е ковано желязо?</h2>
              <div className="content-text">
                <p>Терминът „ковано желязо" е силно малтретиран в днешния търговски пазар, тъй като се прилага към всичко от огъната стоманена тел до алуминия. Технически терминът трябва да се прилага само за желязо, което е било обработено горещо c Физическата сила като ковашкия чук, за да причини потока на метала и да бъде преоформен в желаната форма. Тъй като желязото се изковава ръчно, обикновено се наблюдават малки неравности.</p>

                <p>От това описание е лесно да разберем защо истинскoтo ковано желязо е сравнително рядка стока днес. Размерът на уменията, труда и времето, необходими за производството му, го правят значително по-скъпо от декоративното желязо, което често се намира днес. И тъй като повечето клиенти нямат грижата да разбират или ценят металообработването от най-високо ниво, те не желаят да плащат разликата.</p>

                <p>Още по-рядко от умението за ръчно коване е нисковъглеродното желязо (0.04% въглерод), което е основата за историческото ковано желязо. Hисковъглеродният материал притежава още една привлекателна характеристика: той е далеч по-устойчив на ръжда, отколкото стоманата (от 0,2 до 0,6% въглеродно съдържание)</p>

                <h3>„Направете трайно впечатление – придайте уникалност!"</h3>

                <p>Високо квалифицираните занаятчии придават нов живот на дома, като създават елегантност и разграничение. Металообработването изразява интересите и личността на собственика, като по този начин създава уникалност и уют на всеки дом. От модерни до традиционни, обикновени и орнаментирани, изискани парапети и врати за всеки вкус.</p>

                <h3>Вътрешна работа</h3>

                <p>Предлагаме специална интериорна металообработка, използваща желязо, бронз, алуминий и неръждаема стомана както за външни, така и за вътрешни приложения. Можете да изберете между ръчно украсени, изковани парапети, декоративни врати, както и по-модерни стъклени и хоризонтални парапети. Металните релси могат да бъдат проектирани и конструирани с голяма гъвкавост за всички видове приложения.</p>

                <p>Целта на работата ни е да създадем елегантност и разграничение във вашия дом, които не могат да бъдат постигнати с други материали. Предлагаме уникална декоративна металообработка за да създадем елегантно и трайно впечатление във вашият дом.</p>

                <h3>Външни приложения</h3>

                <p>Външната металообработка може да послужи за обогатяване на съществуващата външна фасада. Желязото придава тихо богатство и разнообразие на сградата. Използва се за прозорци, врати, за безопасност на стълби и балкони, както и около дворове и цветни лехи за неприкосновеност и защита.</p>

                <p>Защитете и разкрасете своя дом или бизнес с декоративни метали.</p>

                <p><strong>Външната работа е повече от просто декоративна:</strong></p>
                <ul>
                  <li>Придава цветен контраст</li>
                  <li>Осигурява защита</li>
                  <li>Привлича вниманието с красив дизайн</li>
                  <li>Придава уникалност на Вашият дом</li>
                </ul>

                <h3>Реставрация</h3>

                <p>Възстановяване на фини архитектурни метални изделия. Hашата цел е да съхраним богатата история и традицията на металообработването. Чрез възстановяването, даваме възможност за изследване нa миналото и да приложим техниките на Стария свят към модерните проекти.</p>

                <p>Направете трайно впечатление с персонализирани ръчно подправени маси и столове, стелажи, поставки и мивки. Създаваме мебели по поръчка с помощта на желязо, бронз, алуминий и неръждаема стомана. Комбинацията от метали може да се използва, за да се развие елегантност и разграничение. От модерни до традиционни, обикновени и орнаментирани, създаваме изискани мебели за дома.</p>

                <h3>Многофамилни жилища</h3>

                <p>Добавете разграничение към апартамент, градска къща или жилищен комплекс със собствени парапети и балкони. Парапетите включително тръбните релси и кабелните релси от неръждаема стомана, се използват в различни среди. Ако искате плавен съвременен облик или смело промишлено приложение, ние имаме опит и опит, за да сме сигурни, че ще оправдаем вашите очаквания!</p>

                <h3>Бизнес</h3>

                <p>Производство на метални изделия за всички бизнес и търговски предприемачи и техните клиенти. Работа с декоративни метали във вашия търговски проект. Декоративният метал е привлекателен, универсален и добавя сигурност. Системата за сигурност просто не е достатъчна, за да защити инвестицията си. Дайте на бизнеса си допълнителна защита с железни огради и охранители за прозорци.</p>

                <h3>Защо да използваме ковано желязо?</h3>

                <p>С невъоръжено око липсва видима разлика между ковано желязо и мека стомана (модерният еквивалент), но кованото желязо не се отличава с външния си вид, а с работните си свойства и устойчивостта си на корозия. Kовано желязото, както и всички черни метали корозира при определени обстоятелства, доказателства за неговата дълготрайност и продължителност на живот са обичайно в нашите градове и провинцията. Викториански парапети на градската къща – ковано желязо на двеста години. Големи декоративни врати до къщи от осемнадесети век – ковано желязо на триста години. Простият факт, че издържа толкова много декоративнoтo ковано желязо, често с малко или никаква поддръжка, говори за качеството на материала.</p>

                <h3>Проучване</h3>

                <p>Проблемите с бързата корозия на мекатa стомана в сравнение с ковано желязо са били известни до началото на ХХ век. Заключението е че въглеродът в стоманата носи отговорност за неговата корозивност, което води до теорията, че отстраняването на въглерода премахва проблема с корозията. Няма никакви убедителни доказателства, за да се подкрепят твърденията за неподатливост на чиста желязо и всъщност самите производители на чистo желязо не претендират за устойчивост на корозия.</p>

                <p>Проучването на ковано желязо и меката стомана беше химичен анализ, който като че ли пренебрегна присъствието на шлаките. По време на производствения процес ковано желязото не се стопява, както и повече рафинирани метали, така че примесите да се включват в матрицата на желязото, а не да се отделят и изхвърлят. При тези високи температури примесите се обръщат към стъкло и са известни като „шлака", състояща се от карбиди и силикати, които дават на кованотo желязо своята влакнеста структура; Приблизително 250,000 силициеви влакна се появяват във всеки квадратен инч от висококачествено ковано желязо. Необходим е специален тест за откриване на шлаката, от която ковано желязо съдържа до 5%, но това е тази шлака, която осигурява на ковано желязо своите устойчиви на корозия свойства.</p>

                <h3>Шлаката, налична в структурата на ковано желязо, потиска корозията</h3>

                <p>Самите шлаки са некорозионни и служат като ефективна механична бариера срещу прогреса на корозия. Структурата на желязото води до много груба (микроскопично) повърхностна текстура, която се свързва с оксидния слой, което го предпазва от извличане на повърхността. Окисите следователно действат като защитно покритие, предотвратяващо по-нататъшна корозия.</p>

                <p>Поради това важните корозионни свойства на ковано желязо се дължат на неговите примеси под формата на шлака. От това следва, че желязото и стоманата, без шлаката, няма да имат същата устойчивост на корозия. Освен това шлаката има допълнително предимство по отношение на традиционните техники на коване.</p>
              </div>
            </div>
          );
        
        case 'railings':
          return (
            <div className="content-section">
              <h2>Парапети от ковано желязо</h2>
              <div className="product-showcase">
                <img 
                  src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/%D0%BF%D0%B0%D1%80%D0%B0%D0%BF%D0%B5%D1%82%D0%B8-%D0%BE%D1%82-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%B6%D0%B5%D0%BB%D1%8F%D0%B7%D0%BE-1935354515811926003_n.jpg" 
                  alt="Парапети от ковано желязо"
                  className="product-image"
                />
                <div className="product-description">
                  <p>Елегантни и издръжливи парапети от ковано желязо, които добавят характер и стил към всяко пространство. Изработени са с внимание към детайла и високо качество на изпълнение.</p>
                  <ul>
                    <li>Ръчно изработени</li>
                    <li>Издръжливи материали</li>
                    <li>Индивидуален дизайн</li>
                    <li>Професионален монтаж</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        
        case 'beds':
          return (
            <div className="content-section beds-section">
              <h2>Спални от ковано желязо и от метал</h2>
              
              <div className="beds-hero">
                <img 
                  src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/modern-metal-bed-frames.jpg" 
                  alt="Спални от ковано желязо и от метал"
                  className="beds-hero-image"
                />
              </div>
              
              <div className="beds-intro">
                <p>Спалните от ковано желязо са акцента на Вашата спалня. Металните спални и спалните от ковано желязо са уникални със своята здравина и внасят неповторима идентичност на спалнята, като същевременно осигуряват комфорт и сигурност. Предлагаме ви примерен набор от спални от ковано желязо и спални от метал, които не са ковано желязо. Нне изпълняваме вашите желания, като същевременно съчетаваме сигурността, красотата и ефективността, за да ви осигурим най-доброто и да задоволим дори и най-изтънчения вкус!</p>
              </div>
              
              <div className="beds-grid">
                <div className="bed-item">
                  <img 
                    src="http://kovano-jelyazo.bg/wp-content/uploads/2017/10/0ade403d07b857b7279a147cabd334d6-225x300.jpg" 
                    alt="Спалня от ковано желязо - С01"
                    className="bed-image"
                  />
                  <p className="bed-title">Спалня от ковано желязо – С01</p>
                </div>
                
                <div className="bed-item">
                  <img 
                    src="http://kovano-jelyazo.bg/wp-content/uploads/2017/10/1cbe00955e04dac5fe9e84b4819eea85-300x225.jpg" 
                    alt="Спалня от ковано желязо - С02"
                    className="bed-image"
                  />
                  <p className="bed-title">Спалня от ковано желязо – С02</p>
                </div>
                
                <div className="bed-item">
                  <img 
                    src="http://kovano-jelyazo.bg/wp-content/uploads/2017/10/2-krovati-kovanyie-300x189.jpg" 
                    alt="Спалня от ковано желязо - С03"
                    className="bed-image"
                  />
                  <p className="bed-title">Спалня от ковано желязо – С03</p>
                </div>
                
                <div className="bed-item">
                  <img 
                    src="http://kovano-jelyazo.bg/wp-content/uploads/2017/10/7_gr-300x220.jpg" 
                    alt="Спалня от ковано желязо - С04"
                    className="bed-image"
                  />
                  <p className="bed-title">Спалня от ковано желязо – С04</p>
                </div>
              </div>
            </div>
          );

        case 'tables':
          return (
            <div className="content-section tables-section">
              <h2>Маси от ковано желязо и от метал</h2>
              
              <div className="tables-hero">
                <img 
                  src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-19.jpg" 
                  alt="Маси от ковано желязо и от метал"
                  className="tables-hero-image"
                />
              </div>
              
              <div className="tables-intro">
                <p>Масите от ковано желязо са солидни и практически вечни. Наред с това, масите от ковано желязо често се превръщат в основен акцент от интериора на всяко помещение. Вашата маса от ковано желязо може да бъде произведение на изкуството – удобна и красива, тя може да бъде центъра на вашата кухня, трапезария или всекидневна, без непременно да е необходимо да бъде заобиколена от други мебели от ковано желязо.</p>
              </div>
              
              <div className="tables-gallery">
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-1-400x284.jpg" alt="Маса ковано желязо (1)" />
                  <h3>Маса ковано желязо (1) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (1) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-31.jpg" alt="Маса ковано желязо (2)" />
                  <h3>Маса ковано желязо (2) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (2) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-34-400x284.jpg" alt="Маса ковано желязо (3)" />
                  <h3>Маса ковано желязо (3) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (3) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-11-400x284.jpg" alt="Маса ковано желязо (4)" />
                  <h3>Маса ковано желязо (4) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (4) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-20.jpg" alt="Маса ковано желязо (5)" />
                  <h3>Маса ковано желязо (5) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (5) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-33-400x284.jpg" alt="Маса ковано желязо (6)" />
                  <h3>Маса ковано желязо (6) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (6) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-5-400x284.jpg" alt="Маса ковано желязо (7)" />
                  <h3>Маса ковано желязо (7) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (7) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-6-400x284.jpg" alt="Маса ковано желязо (8)" />
                  <h3>Маса ковано желязо (8) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (8) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-7-400x284.jpg" alt="Маса ковано желязо (9)" />
                  <h3>Маса ковано желязо (9) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (9) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-8-400x284.jpg" alt="Маса ковано желязо (10)" />
                  <h3>Маса ковано желязо (10) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (10) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-32-400x284.jpg" alt="Маса ковано желязо (11)" />
                  <h3>Маса ковано желязо (11) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса от ковано желязо (11) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
                
                <div className="table-item">
                  <img src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/Маси-28-400x284.jpg" alt="Маса от ковано желязо (12)" />
                  <h3>Маса от ковано желязо (12) – Ковано желязо мебели – КоВаНа МАГИЯ</h3>
                  <p>Маса ковано желязо (12) – Ковано желязо мебели – КоВаНа МАГИЯ</p>
                </div>
              </div>
            </div>
          );
        
        case 'industrial':
          return (
            <div className="content-section">
              <h2>Мебели индустриален стил</h2>
              <div className="product-showcase">
                <img 
                  src="http://kovano-jelyazo.bg/wp-content/uploads/2021/01/%D0%98%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D0%B0%D0%BB%D0%B5%D0%BD-%D1%81%D1%82%D0%B8%D0%BB-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D0%B8-%E2%80%93-%D0%98%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D0%B0%D0%BB%D0%B5%D0%BD-%D1%81%D1%82%D0%B8%D0%BB-%E2%80%93-%D0%9A%D0%BE%D0%92%D0%B0%D0%9D%D0%B0-%D0%9C%D0%90%D0%93%D0%98%D0%AF-26-1.jpg" 
                  alt="Мебели индустриален стил"
                  className="product-image"
                />
                <div className="product-description">
                  <p>Модерни мебели в индустриален стил, които носят характер и функционалност в дома или офиса. Изработени от високококачествени материали с акцент върху детайла.</p>
                  <ul>
                    <li>Съвременен дизайн</li>
                    <li>Функционалност</li>
                    <li>Издръжливост</li>
                    <li>Стилен външен вид</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        
        case 'contact':
          return (
            <div className="content-section contact-section">
              <h2>Контакти</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Телефон</h3>
                  <p>0894 331 335</p>
                </div>
                <div className="contact-item">
                  <h3>Имейл</h3>
                  <p>kovana.magiya@gmail.com</p>
                </div>
                <div className="contact-item">
                  <h3>Адрес</h3>
                  <p>София, България<br/>
                     ж.к. "Модерен Град"<br/>
                     до кръстовище "Орион"<br/>
                     бул. "Европа" №6А</p>
                </div>
                <div className="contact-item">
                  <h3>Facebook</h3>
                  <p>
                    <a href="https://www.facebook.com/KoBaHaM" target="_blank" rel="noopener noreferrer">
                      КоВаНа МАГИЯ
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        
        default:
          return (
            <div className="home-content">
              <div className="hero-section">
                <img 
                  src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/%D0%B5%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B8-%D0%BE%D1%82-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%B6%D0%B5%D0%BB%D1%8F%D0%B7%D0%BE-00351547434_o.jpg" 
                  alt="КоВаНа МАГИЯ - Елементи от ковано желязо"
                  className="hero-image"
                />
                <h1>КоВаНа МАГИЯ</h1>
              </div>
              
              <div className="main-categories">
                <div className="category-item" onClick={() => setActiveSection('railings')}>
                  <div className="category-image">
                    <img 
                      src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/%D0%BF%D0%B0%D1%80%D0%B0%D0%BF%D0%B5%D1%82%D0%B8-%D0%BE%D1%82-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%B6%D0%B5%D0%BB%D1%8F%D0%B7%D0%BE-1935354515811926003_n.jpg" 
                      alt="Парапети от ковано желязо"
                    />
                  </div>
                  <h3>Парапети от ковано желязо</h3>
                </div>
                
                <div className="category-item" onClick={() => setActiveSection('beds')}>
                  <div className="category-image">
                    <img 
                      src="http://kovano-jelyazo.bg/wp-content/uploads/2017/06/modern-metal-bed-frames.jpg" 
                      alt="Спални от ковано желязо"
                    />
                  </div>
                  <h3>Спални от ковано желязо</h3>
                </div>
                
                <div className="category-item" onClick={() => setActiveSection('industrial')}>
                  <div className="category-image">
                    <img 
                      src="http://kovano-jelyazo.bg/wp-content/uploads/2021/01/%D0%98%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D0%B0%D0%BB%D0%B5%D0%BD-%D1%81%D1%82%D0%B8%D0%BB-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D0%B8-%E2%80%93-%D0%98%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D0%B0%D0%BB%D0%B5%D0%BD-%D1%81%D1%82%D0%B8%D0%BB-%E2%80%93-%D0%9A%D0%BE%D0%92%D0%B0%D0%9D%D0%B0-%D0%9C%D0%90%D0%93%D0%98%D0%AF-26-1.jpg" 
                      alt="Мебели индустриален стил"
                    />
                  </div>
                  <h3>Мебели индустриален стил</h3>
                </div>
              </div>
            </div>
          );
      }
    };

    return (
      <main className="main-content">
        {renderContent()}
      </main>
    );
  };

  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Адрес:</h3>
          <p>гр. София, бул. „Европа" №6А / гр. София, ж.к. "Модерен Град", кв. "Орион"</p>
        </div>
        <div className="footer-center">
          <h3>Моб. тел:</h3>
          <p>0894 331 335 – Любомил Димитров</p>
          <br/>
          <h3>Email:</h3>
          <p>kovana.magiya@gmail.com</p>
        </div>
        <div className="footer-right">
          <div className="social-links">
            <a href="https://www.facebook.com/KoBaHaM" target="_blank" rel="noopener noreferrer">
              <span>f</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span>t</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span>G+</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span>RSS</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 КоВаНа МАГИЯ - Всички права запазени</p>
      </div>
    </footer>
  );

  return (
    <div className="page-container">
      <Sidebar />
      <div className="main-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Components;