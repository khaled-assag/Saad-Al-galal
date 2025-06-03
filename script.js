document.addEventListener('DOMContentLoaded', function() {
    // تنشيط القائمة المتنقلة
    const mobileMenu = document.getElementById('mobileMenu');
    const navList = document.getElementById('navList');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // نافذة الفني المنبثقة
    const technicianIcon = document.getElementById('technicianIcon');
    const technicianModal = document.getElementById('technicianModal');
    const closeModal = document.querySelector('.close-modal');
    
    technicianIcon.addEventListener('click', function() {
        technicianModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        technicianModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === technicianModal) {
            technicianModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // إرسال نموذج طلب الخدمة
    const serviceForm = document.getElementById('serviceForm');
    
    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const service = document.getElementById('service').value;
        const phone = document.getElementById('phone').value;
        
        const whatsappMessage = `مرحباً، أود حجز خدمة كهربائية%0A%0Aالاسم: ${name}%0Aالعنوان: ${address}%0Aالخدمة المطلوبة: ${service}%0Aرقم الهاتف: ${phone}`;
        
        window.open(`https://wa.me/966557077812?text=${whatsappMessage}`, '_blank');
        
        serviceForm.reset();
        
        // يمكنك إضافة رسالة تأكيد هنا إذا أردت
        alert('سيتم تحويلك إلى واتساب لإكمال طلبك. شكراً لثقتك بنا!');
    });

    // تأثير التمرير للعناصر
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .service-item, .testimonial-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // تعيين الخصائص الأولية للعناصر المتحركة
    window.addEventListener('load', function() {
        const animatedElements = document.querySelectorAll('.service-card, .service-item, .testimonial-card, .gallery-item');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // تفعيل التأثير بعد تحميل الصفحة مباشرة
        setTimeout(animateOnScroll, 300);
    });
    
    window.addEventListener('scroll', animateOnScroll);

    // تغيير لون شريط التنقل عند التمرير
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(10, 36, 99, 0.95)';
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'var(--white-color)';
            navbar.style.boxShadow = 'var(--shadow)';
        }
    });

    // إضافة تأثير النقر على الأزرار
    const buttons = document.querySelectorAll('.btn, .floating-button, .service-card, .nav-list a');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});