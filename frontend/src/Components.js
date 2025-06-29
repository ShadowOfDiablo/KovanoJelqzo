import React, { useState } from 'react';

const Components = () => {
  const [activeSection, setActiveSection] = useState('home');

  const Header = () => (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img 
            src="https://images.unsplash.com/photo-1549057123-650030035d85?w=120&h=120&fit=crop&crop=faces" 
            alt="КоВаНа МАГИЯ Logo" 
            className="logo-image"
          />
          <div className="logo-text">
            <h1>КоВаНа МАГИЯ</h1>
            <p className="logo-subtitle">Ковано Желязо</p>
          </div>
        </div>
        
        <nav className="main-nav">
          <div className="nav-menu">
            <div className="nav-item" onClick={() => setActiveSection('railings')}>
              <span>Парапети от ковано желязо</span>
            </div>
            <div className="nav-item" onClick={() => setActiveSection('beds')}>
              <span>Спални от ковано желязо</span>
            </div>
            <div className="nav-item" onClick={() => setActiveSection('industrial')}>
              <span>Мебели индустриален стил</span>
            </div>
            <div className="nav-item" onClick={() => setActiveSection('contact')}>
              <span>Контакти</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );

  const Sidebar = () => (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img 
          src="https://images.pexels.com/photos/2749495/pexels-photo-2749495.jpeg?w=120&h=120&fit=crop" 
          alt="КоВаНа МАГИЯ"
          className="sidebar-logo-img"
        />
      </div>
      <nav className="sidebar-nav">
        <h3>КоВаНа МАГИЯ</h3>
        <ul>
          <li onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>
            Начало
          </li>
          <li onClick={() => setActiveSection('railings')} className={activeSection === 'railings' ? 'active' : ''}>
            Парапети от ковано желязо
          </li>
          <li onClick={() => setActiveSection('beds')} className={activeSection === 'beds' ? 'active' : ''}>
            Спални от ковано желязо
          </li>
          <li onClick={() => setActiveSection('industrial')} className={activeSection === 'industrial' ? 'active' : ''}>
            Мебели индустриален стил
          </li>
          <li onClick={() => setActiveSection('gates')} className={activeSection === 'gates' ? 'active' : ''}>
            Портали и врати от ковано желязо
          </li>
          <li onClick={() => setActiveSection('furniture')} className={activeSection === 'furniture' ? 'active' : ''}>
            Мебели от ковано желязо
          </li>
          <li onClick={() => setActiveSection('fences')} className={activeSection === 'fences' ? 'active' : ''}>
            Огради от ковано желязо
          </li>
          <li onClick={() => setActiveSection('imitations')} className={activeSection === 'imitations' ? 'active' : ''}>
            Имитации на ковано желязо
          </li>
          <li onClick={() => setActiveSection('gallery')} className={activeSection === 'gallery' ? 'active' : ''}>
            Галерия
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
        case 'railings':
          return (
            <div className="content-section">
              <h2>Парапети от ковано желязо</h2>
              <div className="product-showcase">
                <img 
                  src="https://images.unsplash.com/flagged/photo-1596920932735-20949ee8f679?w=800&h=600&fit=crop" 
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
            <div className="content-section">
              <h2>Спални от ковано желязо</h2>
              <div className="product-showcase">
                <img 
                  src="https://images.unsplash.com/photo-1585489081862-f3040305d146?w=800&h=600&fit=crop" 
                  alt="Спални от ковано желязо"
                  className="product-image"
                />
                <div className="product-description">
                  <p>Уникални спални от ковано желязо, които съчетават комфорт с елегантност. Всяко легло е изработено индивидуално според предпочитанията на клиента.</p>
                  <ul>
                    <li>Различни размери</li>
                    <li>Артистичен дизайн</li>
                    <li>Здрава конструкция</li>
                    <li>Персонализиран подход</li>
                  </ul>
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
                  src="https://images.unsplash.com/photo-1698788067684-2053c651bfed?w=800&h=600&fit=crop" 
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
                <h1>КоВаНа МАГИЯ</h1>
                <p className="hero-subtitle">Уникални изделия от ковано желязо</p>
              </div>
              
              <div className="main-categories">
                <div className="category-item" onClick={() => setActiveSection('railings')}>
                  <div className="category-image">
                    <img 
                      src="https://images.pexels.com/photos/9886973/pexels-photo-9886973.jpeg?w=400&h=300&fit=crop" 
                      alt="Парапети от ковано желязо"
                    />
                  </div>
                  <h3>Парапети от ковано желязо</h3>
                </div>
                
                <div className="category-item" onClick={() => setActiveSection('beds')}>
                  <div className="category-image">
                    <img 
                      src="https://images.unsplash.com/photo-1574716236621-87d2be17b3a3?w=400&h=300&fit=crop" 
                      alt="Спални от ковано желязо"
                    />
                  </div>
                  <h3>Спални от ковано желязо</h3>
                </div>
                
                <div className="category-item" onClick={() => setActiveSection('industrial')}>
                  <div className="category-image">
                    <img 
                      src="https://images.pexels.com/photos/5939616/pexels-photo-5939616.jpeg?w=400&h=300&fit=crop" 
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