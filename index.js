document.addEventListener('DOMContentLoaded', () => {

    // 1. ALTERNAR ABA ATIVA NA NAVBAR
document.addEventListener('DOMContentLoaded', () => {

    // 1. ALTERNAR ABA ATIVA NA NAVBAR (Sem quebrar a navegação entre páginas)
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
      // Identifica o arquivo do link (ex: "Cadastro.html")
      const linkPage = link.getAttribute('href');

      // Define a classe 'active' com base na página em que o usuário está no momento
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 2. EFEITO DE SELEÇÃO/DESTAQUE NOS CARDS DE SERVIÇOS
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        serviceCards.forEach(c => c.classList.remove('highlight'));
        card.classList.add('highlight');
        
        const serviceName = card.querySelector('h3').innerText;
        console.log(`Serviço selecionado: ${serviceName}`);
      });
    });

    // 3. DIRECIONAMENTO PARA O WHATSAPP COM MENSAGEM PERSONALIZADA
    const btnWhatsapp = document.querySelector('.btn-whatsapp');
    const phoneNumber = "5500999999999"; // Substitua pelo número real (DDD + Número)

    if (btnWhatsapp) {
      btnWhatsapp.addEventListener('click', (e) => {
        e.preventDefault();
        
        const message = encodeURIComponent("Olá, gostaria de agendar uma consulta para o meu pet na VitalPet!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
      });
    }

});
  
    // 2. EFEITO DE SELEÇÃO/DESTAQUE NOS CARDS DE SERVIÇOS
    const serviceCards = document.querySelectorAll('.service-card');
  
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        // Remove o destaque de todos os cards
        serviceCards.forEach(c => c.classList.remove('highlight'));
        // Aplica o destaque no card selecionado
        card.classList.add('highlight');
        
        const serviceName = card.querySelector('h3').innerText;
        console.log(`Serviço selecionado: ${serviceName}`);
      });
    });
  
    // 3. DIRECIONAMENTO PARA O WHATSAPP COM MENSAGEM PERSONALIZADA
    const btnWhatsapp = document.querySelector('.btn-whatsapp');
    const phoneNumber = "5500999999999"; // Substitua pelo número real (DDD + Número)
  
    if (btnWhatsapp) {
      btnWhatsapp.addEventListener('click', (e) => {
        e.preventDefault();
        
        const message = encodeURIComponent("Olá, gostaria de agendar uma consulta para o meu pet na VitalPet!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
      });
    }
  
  });
