;(function(){
  var h = 'dmpmuniz.github.io';
  if (location.hostname !== h && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    console.log('%c⚠ Site não autorizado', 'font-size:1.2rem;color:#C44D38;font-weight:bold');
    console.log('Este site foi criado por Daniel Muniz — https://github.com/dmpmuniz');
  }
})();

document.addEventListener('DOMContentLoaded', function(){
  console.log('%cDe Lucca Arquitetura | Construção', 'font-size:1.5rem;color:#8C1D24;font-weight:bold');
  console.log('%cCriado por Daniel Muniz — https://github.com/dmpmuniz', 'font-size:0.9rem;color:#C44D38');
  console.log('%cProva de conceito — produto não final, sujeito a aprovação do cliente.', 'font-size:0.8rem;color:#888');

  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    console.log('%c⚠ Cópia do código não autorizada. Este site é uma prova de conceito de Daniel Muniz.', 'color:#C44D38');
  });

  var header = document.querySelector('.header');
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav a').forEach(function(link){
      link.addEventListener('click', function(){
        nav.classList.remove('open');
      });
    });
  }

  if (header) {
    window.addEventListener('scroll', function(){
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function(link){
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // ============================================================
  // [VENDER] Função de Apresentação de Venda.
  // Mude VENDER_ATIVO para false para desativar este recurso.
  // Remova também o botão no index.html (<button id="btn-apresentacao">).
  // ============================================================
  var VENDER_ATIVO = true;

  if (VENDER_ATIVO) {
    var slides = [
      {
        num: "01 / 07",
        title: "Uma Nova Identidade Digital para a De Lucca",
        subtitle: "Transforme sua presença online com um site profissional, moderno e feito para atrair clientes.",
        body: '<p>Apresentamos a nova versão do site da <strong>De Lucca Arquitetura e Construção</strong> — uma plataforma digital à altura da excelência dos seus projetos.</p><p>Este não é apenas um site novo. É uma <strong>ferramenta de vendas</strong> que trabalha 24 horas por dia para fortalecer sua marca, gerar leads e transmitir profissionalismo a cada clique.</p><p>Nos próximos passos, você vai entender por que esta versão é um salto à frente do site anterior — e como ela pode trazer <strong>resultados reais</strong> para o seu negócio.</p>'
      },
      {
        num: "02 / 07",
        title: "Nova Identidade Visual: A Evolução da Marca",
        subtitle: "O logo foi redesenhado para refletir a excelência dos serviços que a De Lucca já entrega.",
        body: '<p>O logo antigo tinha uma ótima essência com os arcos, mas o visual 3D e as cores o deixavam datado. O novo conceito é o <strong>"Minimalismo Técnico-Editorial"</strong> — a alma da marca foi mantida, mas a execução foi elevada.</p><div class="feature-list">' +
          '<div class="feature-item"><span class="icon">📐</span><div><h4>Precisão Técnica</h4><p>O novo logo integra linhas de cota (medidas arquitetônicas) nos arcos, transmitindo rigor técnico, engenharia e profissionalismo de alto padrão.</p></div></div>' +
          '<div class="feature-item"><span class="icon">🎨</span><div><h4>Materialidade e Cores</h4><p>O fundo Off-White remete ao papel de prancheta de algodão. Os arcos em Vermelho Rubro e Terracota remetem a materiais nobres como argila e cerâmica.</p></div></div>' +
          '<div class="feature-item"><span class="icon">◻</span><div><h4>Modernidade Flat</h4><p>Design 100% plano (Flat Design), sem sombras — aplicação perfeita em qualquer tamanho, do letreiro da obra ao ícone do WhatsApp.</p></div></div>' +
          '</div>' +
          '<div class="testimonial-block" style="margin-top:16px;">"Esta nova identidade alinha a percepção visual do cliente com a excelente qualidade real dos serviços que a empresa já presta."</div>'
      },
      {
        num: "03 / 07",
        title: "Design que Vende",
        subtitle: "Cada detalhe visual foi pensado para comunicar sofisticação e confiança.",
        body: '<div class="feature-list">' +
          '<div class="feature-item"><span class="icon">🎨</span><div><h4>Tipografia Refinada</h4><p>Playfair Display + Plus Jakarta Sans — uma combinação que transmite elegância e modernidade.</p></div></div>' +
          '<div class="feature-item"><span class="icon">🎯</span><div><h4>Paleta Estratégica</h4><p>O bordô (#8C1D24) como cor primária — remete à solidez, tradição e paixão pelo que faz.</p></div></div>' +
          '<div class="feature-item"><span class="icon">📱</span><div><h4>100% Responsivo</h4><p>Funciona perfeitamente em celular, tablet e computador. Seus clientes acessam de onde estiverem.</p></div></div>' +
          '<div class="feature-item"><span class="icon">✨</span><div><h4>Animações Sutis</h4><p>Micro-interações que encantam sem poluir — a diferença entre um site comum e um site premium.</p></div></div>' +
          '</div>'
      },
      {
        num: "04 / 07",
        title: "Tecnologia que Faz a Diferença",
        subtitle: "Construído com as melhores práticas de desenvolvimento web.",
        body: '<div class="feature-list">' +
          '<div class="feature-item"><span class="icon">🌐</span><div><h4>HTML5 Semântico</h4><p>Código limpo e acessível, favorecendo o ranqueamento no Google e a navegação por leitores de tela.</p></div></div>' +
          '<div class="feature-item"><span class="icon">🎨</span><div><h4>CSS3 Moderno</h4><p>Variáveis, Grid, Flexbox, clamp() — técnicas que entregam performance e flexibilidade.</p></div></div>' +
          '<div class="feature-item"><span class="icon">⚡</span><div><h4>JavaScript Otimizado</h4><p>Código leve e eficiente que não compromete a velocidade de carregamento.</p></div></div>' +
          '<div class="feature-item"><span class="icon">🔒</span><div><h4>Hospedagem Gratuita via GitHub Pages</h4><p>Zero custo de servidor. SSL grátis. Atualização facilitada.</p></div></div>' +
          '</div>'
      },
      {
        num: "05 / 07",
        title: "Comparativo: Site Wix Atual vs. Novo Site",
        subtitle: "Seu site atual foi criado no Wix em 2018. Veja o que estamos propondo de diferente.",
        body: '<table class="comparison-table">' +
          '<thead><tr><th>Item</th><th>Site Atual (Wix)</th><th>Site Novo (Custom)</th></tr></thead>' +
          '<tbody>' +
          '<tr><td>Plataforma</td><td class="badge-old">Wix — template genérico, milhares de sites iguais</td><td class="badge-new">✔ Desenvolvimento sob medida, design exclusivo</td></tr>' +
          '<tr><td>Design</td><td class="badge-old">Tema padrão Wix, sem identidade marcante</td><td class="badge-new">✔ Tipografia refinada, paleta estratégica, estilo premium</td></tr>' +
          '<tr><td>Responsividade</td><td class="badge-old">Adaptação automática do Wix, nem sempre ideal</td><td class="badge-new">✔ Layout manualmente otimizado para cada dispositivo</td></tr>' +
          '<tr><td>SEO</td><td class="badge-old">Limitações Wix — baixo desempenho em buscadores</td><td class="badge-new">✔ HTML semântico, meta tags, performance Core Web Vitals</td></tr>' +
          '<tr><td>Velocidade</td><td class="badge-old">Wix é pesado — carregamento lento</td><td class="badge-new">✔ Código leve e otimizado, carregamento instantâneo</td></tr>' +
          '<tr><td>Custo Mensal</td><td class="badge-old">Wix cobra assinatura mensal 💸</td><td class="badge-new">✔ Hospedagem gratuita (GitHub Pages) — zero custo</td></tr>' +
          '<tr><td>Manutenção</td><td class="badge-old">Wix limita personalizações avançadas</td><td class="badge-new">✔ Código aberto, modular, qualquer dev pode atualizar</td></tr>' +
          '</tbody></table>' +
          '<p style="margin-top:16px;font-size:0.85rem;color:var(--color-technical-gray);">📍 Seu site atual: <a href="https://www.deluccaarquitetura.com/" target="_blank" style="color:var(--color-primary-dark-red);">deluccaarquitetura.com</a> — criado em 2018 com Wix.com</p>'
      },
      {
        num: "06 / 07",
        title: "Resultados Reais para o Seu Negócio",
        subtitle: "Um site profissional não é despesa — é investimento com retorno mensurável.",
        body: '<div class="feature-list">' +
          '<div class="feature-item"><span class="icon">📈</span><div><h4>Mais Credibilidade</h4><p>Um site moderno transmite confiança antes mesmo do primeiro contato.</p></div></div>' +
          '<div class="feature-item"><span class="icon">🌍</span><div><h4>Maior Alcance</h4><p>SEO otimizado + presença em redes sociais = mais clientes encontrando você.</p></div></div>' +
          '<div class="feature-item"><span class="icon">💰</span><div><h4>Zero Custo de Servidor</h4><p>Hospedagem gratuita no GitHub Pages com certificado SSL incluso.</p></div></div>' +
          '<div class="feature-item"><span class="icon">🔧</span><div><h4>Fácil Manutenção</h4><p>Código limpo e documentado. Qualquer desenvolvedor pode atualizar rapidamente.</p></div></div>' +
          '</div>' +
          '<div class="testimonial-block">' +
          '"Um site bem construído é o melhor vendedor que uma empresa pode ter. Ele trabalha 24 horas, nunca tira folga e causa uma primeira impressão inesquecível."' +
          '<div class="author">— Daniel Muniz, Desenvolvedor Web</div></div>'
      },
      {
        num: "07 / 07",
        title: "Pronto para Transformar sua Presença Digital?",
        subtitle: "O site já está pronto. As fotos utilizadas são de exemplo — precisamos das fotos reais do escritório, projetos e equipe para a versão final.",
        body: '<div class="pricing-box">' +
          '<div class="price-label">Investimento</div>' +
          '<div class="price-value">Sob Consulta</div>' +
          '<div class="price-hint">Incluso: site completo + suporte por 30 dias. Prazos de publicação dependem da configuração do domínio (até 72h úteis).</div>' +
          '</div>' +
          '<p style="text-align:center;font-size:1rem;margin-bottom:8px;"><strong>Entre em contato agora e garanta esta versão:</strong></p>' +
          '<div style="text-align:center;margin:16px 0;">' +
          '<a href="https://wa.me/5512992002967?text=Ol%C3%A1%20Daniel%2C%20vi%20a%20apresenta%C3%A7%C3%A3o%20do%20site%20da%20De%20Lucca%20e%20quero%20saber%20mais!" target="_blank" style="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:600;font-size:1rem;transition:all 0.2s;" onmouseover="this.style.background=\'#1da851\';this.style.transform=\'translateY(-1px)\';this.style.boxShadow=\'0 4px 16px rgba(37,211,102,0.3)\'" onmouseout="this.style.background=\'#25D366\';this.style.transform=\'none\';this.style.boxShadow=\'none\'">' +
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
          'Fale com o desenvolvedor' +
          '</a></div>' +
          '<p style="text-align:center;font-size:0.95rem;">✉️ <a href="mailto:dmp.muniz@gmail.com" style="color:var(--color-primary-dark-red);font-weight:600;">dmp.muniz@gmail.com</a></p>'
      }
    ];

    var overlay = document.createElement('div');
    overlay.className = 'presentation-overlay';
    overlay.innerHTML = '' +
      '<div class="presentation-slide" id="presentation-slide">' +
        '<button class="presentation-close" id="presentation-close">&times;</button>' +
        '<div id="presentation-content"></div>' +
        '<div class="presentation-nav">' +
          '<button class="presentation-nav-btn prev" id="pres-prev">← Voltar</button>' +
          '<div class="presentation-dots" id="pres-dots"></div>' +
          '<button class="presentation-nav-btn next" id="pres-next">Avançar →</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var currentSlide = 0;

    function renderSlide(index) {
      var s = slides[index];
      var content = document.getElementById('presentation-content');
      content.innerHTML = '' +
        '<div class="slide-number">' + s.num + '</div>' +
        '<h2>' + s.title + '</h2>' +
        (s.subtitle ? '<p class="slide-sub">' + s.subtitle + '</p>' : '') +
        '<div class="slide-body">' + s.body + '</div>';

      var prevBtn = document.getElementById('pres-prev');
      var nextBtn = document.getElementById('pres-next');
      prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';

      if (index === slides.length - 1) {
        nextBtn.textContent = 'Fechar';
        nextBtn.className = 'presentation-nav-btn next';
      } else {
        nextBtn.textContent = 'Avançar →';
        nextBtn.className = 'presentation-nav-btn next';
      }

      var dots = document.getElementById('pres-dots');
      dots.innerHTML = '';
      for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement('button');
        dot.className = 'presentation-dot' + (i === index ? ' active' : '');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', function(){ goTo(parseInt(this.getAttribute('data-index'))); });
        dots.appendChild(dot);
      }

      overlay.querySelector('.presentation-slide').scrollTop = 0;
    }

    function goTo(index) {
      if (index < 0 || index >= slides.length) return;
      currentSlide = index;
      renderSlide(index);
    }

    function next() {
      if (currentSlide === slides.length - 1) {
        fecharApresentacao();
        window.location.href = 'contato.html';
        return;
      }
      goTo(currentSlide + 1);
    }

    function prev() {
      goTo(currentSlide - 1);
    }

    function abrirApresentacao() {
      currentSlide = 0;
      overlay.classList.add('open');
      renderSlide(0);
      document.body.style.overflow = 'hidden';
    }

    function fecharApresentacao() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('presentation-close').addEventListener('click', fecharApresentacao);
    document.getElementById('pres-next').addEventListener('click', next);
    document.getElementById('pres-prev').addEventListener('click', prev);

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) fecharApresentacao();
    });

    document.addEventListener('keydown', function(e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') fecharApresentacao();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    var floatBtn = document.createElement('div');
    floatBtn.id = 'float-apresentacao';
    floatBtn.innerHTML = '' +
      '<button class="float-close" id="float-close" aria-label="Fechar">&times;</button>' +
      '<button class="float-body" id="float-body">' +
        '<span class="float-icon">▶</span>' +
        '<span class="float-text">Apresentação</span>' +
      '</button>';
    document.body.appendChild(floatBtn);

    document.getElementById('float-body').addEventListener('click', abrirApresentacao);
    document.getElementById('float-close').addEventListener('click', function(e) {
      e.stopPropagation();
      floatBtn.style.display = 'none';
    });
  }
});
