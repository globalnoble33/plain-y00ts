document.addEventListener("DOMContentLoaded", () => {

    let currentBodyColour = 'black';
    let currentFaceColour = 'black';
    let currentFace = 'chilled';

    const hideAllBodies = () => {
        document.querySelectorAll('[class*="js-body"]').forEach((body) => {
            body.classList.add('hidden');
        });
    }

    const hideAllFaces = () => {
        document.querySelectorAll('[class*="js-face"]').forEach((face) => {
            face.classList.add('hidden');
        });
    }

    const showFace = () => {
        document.querySelector(`.js-${currentFace}.js-face-${currentFaceColour}`).classList.remove('hidden');
    }

    const showBody = () => {
        document.querySelector(`.js-body-${currentBodyColour}`).classList.remove('hidden');
    }

    const updateTriggers = () => {

        document.querySelectorAll('.js-y00t-change-trigger .js-child').forEach((trigger) => {
            trigger.classList.remove(...['!border-white', 'ring-2', 'ring-blue-400']);
        });

        document.querySelector(`[data-body-colour="${currentBodyColour}"] .js-child`).classList.add(...['!border-white', 'ring-2', 'ring-blue-400']);
        document.querySelector(`[data-face-colour="${currentFaceColour}"] .js-child`).classList.add(...['!border-white', 'ring-2', 'ring-blue-400']);
    }

    document.querySelectorAll('[data-face-colour]').forEach((instance) => {

        const val = instance.getAttribute('data-face-colour');
        
        instance.addEventListener('click', (e) => {
        
            currentFaceColour = val;

            hideAllFaces();
            showFace();

            updateTriggers();
    
        });
    });

    document.querySelectorAll('[data-body-colour]').forEach((instance) => {

        const val = instance.getAttribute('data-body-colour');
        
        instance.addEventListener('click', (e) => {
        
            currentBodyColour = val;

            hideAllBodies();
            showBody();

            updateTriggers();
    
        });
    });

    document.querySelector('.js-type-of-face').addEventListener('change', () => {
        currentFace = document.querySelector('.js-type-of-face').value;
        hideAllFaces();
        showFace();
    });
});