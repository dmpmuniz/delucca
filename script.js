;(function(){
  var h = 'dmpmuniz.github.io';
  if (location.hostname !== h && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    console.log('%c[⚠] Site não autorizado', 'font-size:1.2rem;color:#C44D38;font-weight:bold');
    console.log('Este site foi criado por Daniel Muniz — https://dmpmuniz.github.io/homepage/');
  }
})();

document.addEventListener('DOMContentLoaded', function(){
  console.log('%cDe Lucca Arquitetura | Construção', 'font-size:1.5rem;color:#8C1D24;font-weight:bold');
  console.log('%cCriado por Daniel Muniz — https://dmpmuniz.github.io/homepage/', 'font-size:0.9rem;color:#C44D38');
  console.log('%cProva de conceito — produto não final, sujeito a aprovação do cliente.', 'font-size:0.8rem;color:#888');

  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    console.log('%c[⚠] Cópia do código não autorizada. Este site é uma prova de conceito de Daniel Muniz.', 'color:#C44D38');
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
          '<div class="feature-item"><span class="material-symbols-outlined">straighten</span><div><h4>Precisão Técnica</h4><p>O novo logo integra linhas de cota (medidas arquitetônicas) nos arcos, transmitindo rigor técnico, engenharia e profissionalismo de alto padrão.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">palette</span><div><h4>Materialidade e Cores</h4><p>O fundo Off-White remete ao papel de prancheta de algodão. Os arcos em Vermelho Rubro e Terracota remetem a materiais nobres como argila e cerâmica.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">checklist</span><div><h4>Modernidade Flat</h4><p>Design 100% plano (Flat Design), sem sombras — aplicação perfeita em qualquer tamanho, do letreiro da obra ao ícone do WhatsApp.</p></div></div>' +
          '</div>' +
          '<div class="testimonial-block" style="margin-top:16px;">"Esta nova identidade alinha a percepção visual do cliente com a excelente qualidade real dos serviços que a empresa já presta."</div>'
      },
      {
        num: "03 / 07",
        title: "Design que Vende",
        subtitle: "Cada detalhe visual foi pensado para comunicar sofisticação e confiança.",
        body: '<div class="feature-list">' +
          '<div class="feature-item"><span class="material-symbols-outlined">palette</span><div><h4>Tipografia Refinada</h4><p>Playfair Display + Plus Jakarta Sans — uma combinação que transmite elegância e modernidade.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">track_changes</span><div><h4>Paleta Estratégica</h4><p>O bordô (#8C1D24) como cor primária — remete à solidez, tradição e paixão pelo que faz.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">devices</span><div><h4>100% Responsivo</h4><p>Funciona perfeitamente em celular, tablet e computador. Seus clientes acessam de onde estiverem.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">auto_awesome</span><div><h4>Animações Sutis</h4><p>Micro-interações que encantam sem poluir — a diferença entre um site comum e um site premium.</p></div></div>' +
          '</div>'
      },
      {
        num: "04 / 07",
        title: "Tecnologia que Faz a Diferença",
        subtitle: "Construído com as melhores práticas de desenvolvimento web.",
        body: '<div class="feature-list">' +
          '<div class="feature-item"><span class="material-symbols-outlined">language</span><div><h4>HTML5 Semântico</h4><p>Código limpo e acessível, favorecendo o ranqueamento no Google e a navegação por leitores de tela.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">palette</span><div><h4>CSS3 Moderno</h4><p>Variáveis, Grid, Flexbox, clamp() — técnicas que entregam performance e flexibilidade.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">bolt</span><div><h4>JavaScript Otimizado</h4><p>Código leve e eficiente que não compromete a velocidade de carregamento.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">lock</span><div><h4>Hospedagem Gratuita via GitHub Pages</h4><p>Zero custo de servidor. SSL grátis. Atualização facilitada.</p></div></div>' +
          '</div>'
      },
      {
        num: "05 / 07",
        title: "Comparativo: Site Wix Atual vs. Novo Site",
        subtitle: "Seu site atual foi criado no Wix em 2018. Veja o que estamos propondo de diferente.",
        body: '<table class="comparison-table">' +
          '<thead><tr><th>Item</th><th>Site Atual (Wix)</th><th>Site Novo (Custom)</th></tr></thead>' +
          '<tbody>' +
          '<tr><td>Plataforma</td><td class="badge-old">Wix — template genérico, milhares de sites iguais</td><td class="badge-new"><span class="material-symbols-outlined" style="font-size:20px;">check</span> Desenvolvimento sob medida, design exclusivo</td></tr>' +
          '<tr><td>Design</td><td class="badge-old">Tema padrão Wix, sem identidade marcante</td><td class="badge-new"><span class="material-symbols-outlined" style="font-size:20px;">check</span> Tipografia refinada, paleta estratégica, estilo premium</td></tr>' +
          '<tr><td>Responsividade</td><td class="badge-old">Adaptação automática do Wix, nem sempre ideal</td><td class="badge-new"><span class="material-symbols-outlined" style="font-size:20px;">check</span> Layout manualmente otimizado para cada dispositivo</td></tr>' +
          '<tr><td>SEO</td><td class="badge-old">Limitações Wix — baixo desempenho em buscadores</td><td class="badge-new"><span class="material-symbols-outlined" style="font-size:20px;">check</span> HTML semântico, meta tags, performance Core Web Vitals</td></tr>' +
          '<tr><td>Velocidade</td><td class="badge-old">Wix é pesado — carregamento lento</td><td class="badge-new"><span class="material-symbols-outlined" style="font-size:20px;">check</span> Código leve e otimizado, carregamento instantâneo</td></tr>' +
          '<tr><td>Custo Mensal</td><td class="badge-old">Wix cobra assinatura mensal <span class="material-symbols-outlined" style="font-size:26px;vertical-align:middle;">money_off</span></td><td class="badge-new"><span class="material-symbols-outlined" style="font-size:20px;">check</span> Hospedagem gratuita (GitHub Pages) — zero custo</td></tr>' +
          '<tr><td>Manutenção</td><td class="badge-old">Wix limita personalizações avançadas</td><td class="badge-new"><span class="material-symbols-outlined" style="font-size:20px;">check</span> Código aberto, modular, qualquer dev pode atualizar</td></tr>' +
          '</tbody></table>' +
          '<p style="margin-top:16px;font-size:0.85rem;color:var(--color-technical-gray);"><span class="material-symbols-outlined" style="font-size:26px;vertical-align:middle;">location_on</span> Seu site atual: <a href="https://www.deluccaarquitetura.com/" target="_blank" style="color:var(--color-primary-dark-red);">deluccaarquitetura.com</a> — criado em 2018 com Wix.com</p>'
      },
      {
        num: "06 / 07",
        title: "Resultados Reais para o Seu Negócio",
        subtitle: "Um site profissional não é despesa — é investimento com retorno mensurável.",
        body: '<div class="feature-list">' +
          '<div class="feature-item"><span class="material-symbols-outlined">trending_up</span><div><h4>Mais Credibilidade</h4><p>Um site moderno transmite confiança antes mesmo do primeiro contato.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">public</span><div><h4>Maior Alcance</h4><p>SEO otimizado + presença em redes sociais = mais clientes encontrando você.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">attach_money</span><div><h4>Zero Custo de Servidor</h4><p>Hospedagem gratuita no GitHub Pages com certificado SSL incluso.</p></div></div>' +
          '<div class="feature-item"><span class="material-symbols-outlined">build</span><div><h4>Fácil Manutenção</h4><p>Código limpo e documentado. Qualquer desenvolvedor pode atualizar rapidamente.</p></div></div>' +
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
          '<div class="price-hint">Incluso: site completo + suporte 30 dias</div>' +
          '</div>' +
          '<p style="text-align:center;font-size:0.95rem;margin-bottom:4px;"><strong>Quer um site profissional como este?</strong></p>' +
          '<p style="text-align:center;font-size:0.85rem;color:var(--color-technical-gray);margin-bottom:12px;">100% personalizado para qualquer negócio — design exclusivo, código sob medida, zero custo de servidor.</p>' +
          '<div class="testimonial-block" style="margin:0 0 8px;text-align:center;font-style:normal;padding:16px 20px;">' +
          '<p style="font-size:0.85rem;margin-bottom:8px;"><span class="material-symbols-outlined" style="font-size:28px;vertical-align:middle;">code</span> <strong>Desenvolvedor: Daniel Muniz</strong></p>' +
          '<p style="font-size:0.8rem;color:var(--color-technical-gray);margin-bottom:8px;">Crio sites institucionais modernos sob medida. Da arquitetura ao comércio local — transformo sua presença digital com design premium e tecnologia de ponta.</p>' +
          '<p style="font-size:0.8rem;margin-bottom:8px;"><span class="material-symbols-outlined" style="font-size:26px;vertical-align:middle;">mail</span> <a href="mailto:dmp.muniz@gmail.com" style="color:var(--color-primary-dark-red);font-weight:600;">dmp.muniz@gmail.com</a></p>' +
          '<p style="font-size:0.8rem;margin-bottom:0;"><span class="material-symbols-outlined" style="font-size:26px;vertical-align:middle;">link</span> <a href="https://dmpmuniz.github.io/homepage/" target="_blank" style="color:var(--color-primary-dark-red);font-weight:600;">dmpmuniz.github.io/homepage</a> — conheça mais projetos</p>' +
          '</div>'
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
      '</div>' +
      '<div class="scroll-arrow" id="scroll-arrow">' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C1D24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
      '</div>';
    document.body.appendChild(overlay);

    var currentSlide = 0;

    var DISCLAIMER_HTML = '<div class="slide-disclaimer"><span class="material-symbols-outlined" style="font-size:28px;">warning</span><span><strong>Disclaimer:</strong> Projeto oferecido ao cliente em regime de protótipo. Aguardando validação e aprovação comercial.</span></div>';

    function renderSlide(index) {
      var s = slides[index];
      var content = document.getElementById('presentation-content');
      content.innerHTML = '' +
        '<div class="slide-number">' + s.num + '</div>' +
        '<h2>' + s.title + '</h2>' +
        (s.subtitle ? '<p class="slide-sub">' + s.subtitle + '</p>' : '') +
        '<div class="slide-body">' + DISCLAIMER_HTML + s.body + '</div>';

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

      var slideEl = overlay.querySelector('.presentation-slide');
      slideEl.scrollTop = 0;

      var arrow = document.getElementById('scroll-arrow');
      setTimeout(function() {
        if (slideEl.scrollHeight > slideEl.clientHeight) {
          arrow.classList.add('visible');
        } else {
          arrow.classList.remove('visible');
        }
      }, 50);

      slideEl.onscroll = function() {
        if (slideEl.scrollHeight - slideEl.scrollTop - slideEl.clientHeight < 20) {
          arrow.classList.remove('visible');
        } else {
          arrow.classList.add('visible');
        }
      };
    }

    function goTo(index) {
      if (index < 0 || index >= slides.length) return;
      currentSlide = index;
      renderSlide(index);
    }

    function next() {
      if (currentSlide === slides.length - 1) {
        fecharApresentacao();
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
        '<span class="material-symbols-outlined" style="font-size:28px;">play_arrow</span>' +
        '<span class="float-text">Apresentação</span>' +
      '</button>';
    document.body.appendChild(floatBtn);

    document.getElementById('float-body').addEventListener('click', abrirApresentacao);
    document.getElementById('float-close').addEventListener('click', function(e) {
      e.stopPropagation();
      floatBtn.style.display = 'none';
    });

    abrirApresentacao();
  }
});
