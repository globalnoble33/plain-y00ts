

document.addEventListener("DOMContentLoaded", () => {

    let currentBodyColour = 'grey';
    let currentFaceColour = 'grey';
    let currentFace = 'growl';

    const noses = [];

    const colours = {
        orange: {
            dark: '#DE6F5B',
            medium: '#EF9E86',
            light: '#FFE1C6',
            nose: '#50282C',
        },
        pink: {
            dark: '#ED8195',
            medium: '#FFACB2',
            light: '#FBD5E7',
            nose: '#53272F',
        },
        purple: {
            dark: '#C0C7FF',
            medium: '#E6EDFF',
            light: '#F7FEFF',
            nose: '#B8B2F1',
        },
        green: {
            dark: '#588A83',
            medium: '#82B4AD',
            light: '#BEDEE2',
            nose: '#0F1E19',
        },
        black: {
            dark: '#53514F',
            medium: '#85807D',
            light: '#B3ADAD',
            nose: '#0F1E19',
        },
        grey: {
            dark: '#B1A493',
            medium: '#D5CEBE',
            light: '#F3F5EA',
            nose: '#0F1E19',
        }
    }

    /**
     * Return colour profile based on data-attribute passed
     * parameter will always be lowercase colour 
     */
    const getColours = (string) => {

        switch (string) {
            case 'orange' :
                return colours.orange;
                break;
            case 'pink' :
                return colours.pink;
                break;
            case 'purple' :
                return colours.purple;
                break;
            case 'green' :
                return colours.green;
                break;
            case 'black' :
                return colours.black;
                break;
            case 'grey' :
                return colours.grey;
                break;
                default:
                    return colours.grey;
        }
    }

    /**
     * Toggle tab control state + show / hide relevant tab
     */
    const toggleCustomiseTab = (target) => {
        document.querySelectorAll('.js-customise-tab').forEach((instance) => {
            instance.classList.add('hidden');
        });

        document.querySelectorAll('.js-tab-trigger').forEach((instance) => {
            instance.classList.add('bg-zinc-100');
        });

        document.querySelector(`[data-target="${target}"]`).classList.remove(...['bg-zinc-100']);
        
        document.querySelector(`.${target}`).classList.remove('hidden');
    }

    /**
     * Add click event to .js-tab-triggers to switch focused tab on customiser
     */
    document.querySelectorAll('.js-tab-trigger').forEach((instance) => {
        const target = instance.getAttribute('data-target');

        instance.addEventListener('click', () => {
            toggleCustomiseTab(target);
        });
    });

    /**
     * Get all noses and store in array
    */
    document.querySelectorAll('.js-face .js-nose-group .js-nose').forEach((nose) => {
        noses.push(nose);
    });

    /**
     * Update body colours using manually-placed colour level class names
     */
    const updateBodyColours = () => {
        let colour = getColours(currentBodyColour);

        // Update custom picker selection so it updates as you go, if left open
        document.getElementById('js-body-custom-dark').value = colour.dark;
        document.getElementById('js-body-custom-medium').value = colour.medium;
        document.getElementById('js-body-custom-light').value = colour.light;

        document.querySelectorAll('.js-body-light').forEach((bodyLayer) => {
            bodyLayer.style.fill = colour.light;
        });

        document.querySelectorAll('.js-body-medium').forEach((bodyLayer) => {
            bodyLayer.style.fill = colour.medium;
        });

        document.querySelectorAll('.js-body-dark').forEach((bodyLayer) => {
            bodyLayer.style.fill = colour.dark;
        });
    }

    /**
     * Update face colours using manually-placed colour level class names
     */
    const updateFaceColours = () => {
        let colour = getColours(currentFaceColour);

        // Update custom picker selection so it updates as you go, if left open
        document.getElementById('js-face-custom-dark').value = colour.dark;
        document.getElementById('js-face-custom-medium').value = colour.medium;
        document.getElementById('js-face-custom-light').value = colour.light;

        document.querySelectorAll('.js-face-light').forEach((faceLayer) => {
            faceLayer.style.fill = colour.light;
        });

        document.querySelectorAll('.js-face-medium').forEach((faceLayer) => {
            faceLayer.style.fill = colour.medium;
        });

        document.querySelectorAll('.js-face-dark').forEach((faceLayer) => {
            faceLayer.style.fill = colour.dark;
        });
    }

    /**
     * Update state of colour selection buttons
     */
    const updateTriggers = () => {

        document.querySelectorAll('.js-y00t-change-trigger .js-child').forEach((trigger) => {
            trigger.classList.remove(...['!border-white', 'ring-2', 'ring-blue-400']);
        });

        document.querySelector(`[data-body-colour="${currentBodyColour}"] .js-child`).classList.add(...['!border-white', 'ring-2', 'ring-blue-400']);
        document.querySelector(`[data-face-colour="${currentFaceColour}"] .js-child`).classList.add(...['!border-white', 'ring-2', 'ring-blue-400']);
    }

    const updateDownload = () => {
    }

    /**
     * Add click event to [data-face-colour] colour selection buttons
     */
    document.querySelectorAll('[data-face-colour]').forEach((instance) => {

        const val = instance.getAttribute('data-face-colour');
        
        instance.addEventListener('click', (e) => {
        
            currentFaceColour = val;

            updateTriggers();

            updateFaceColours();

            updateDownload();
    
        });
    });


    /**
     * Add click event to [data-body-colour] colour selection buttons
     */
    document.querySelectorAll('[data-body-colour]').forEach((instance) => {

        const val = instance.getAttribute('data-body-colour');
        
        instance.addEventListener('click', (e) => {
        
            currentBodyColour = val;

            updateTriggers();

            updateBodyColours();

            updateDownload();
    
        });
    });

    /**
     * Add click event to face type selector
     */
    document.querySelector('.js-type-of-face').addEventListener('change', () => {
        currentFace = document.querySelector('.js-type-of-face').value;

        document.querySelectorAll('.js-face').forEach((face) => {
            face.style.opacity = '0';
        });
        
        document.getElementById(`face-${currentFace}`).style.opacity = '100';

        updateDownload();
    });

    /**
     * Add change event to custom face colour toggle
     */
    document.getElementById('use-custom-face').addEventListener('change', () => {

        const colours = getColours(currentFaceColour);

        if (document.getElementById('use-custom-face').checked) {
            document.querySelector('.js-custom-face-colours').classList.remove('hidden');
            document.getElementById('js-face-custom-dark').value = colours.dark;
            document.getElementById('js-face-custom-medium').value = colours.medium;
            document.getElementById('js-face-custom-light').value = colours.light;
        } else {
            document.querySelector('.js-custom-face-colours').classList.add('hidden');
            updateFaceColours();
        }

        updateDownload();
    });

    /**
     * Add change event to custom face colour toggle
     */
    document.getElementById('use-custom-body').addEventListener('change', () => {

        const colours = getColours(currentBodyColour);

        if (document.getElementById('use-custom-body').checked) {
            document.querySelector('.js-custom-body-colours').classList.remove('hidden');
            document.getElementById('js-body-custom-dark').value = colours.dark;
            document.getElementById('js-body-custom-medium').value = colours.medium;
            document.getElementById('js-body-custom-light').value = colours.light;
        } else {
            document.querySelector('.js-custom-body-colours').classList.add('hidden');
            updateFaceColours();
        }

        updateDownload();
    });

    document.getElementById('js-face-custom-dark').addEventListener('input', () => {
        document.querySelectorAll('.js-face-dark').forEach((faceLayer) => {
            faceLayer.style.fill = document.getElementById('js-face-custom-dark').value;    
        });

        updateDownload();
    });

    document.getElementById('js-body-custom-dark').addEventListener('input', () => {
        document.querySelectorAll('.js-body-dark').forEach((faceLayer) => {
            faceLayer.style.fill = document.getElementById('js-body-custom-dark').value;    
        });

        updateDownload();
    });

    document.getElementById('js-face-custom-medium').addEventListener('input', () => {
        document.querySelectorAll('.js-face-medium').forEach((faceLayer) => {
            faceLayer.style.fill = document.getElementById('js-face-custom-medium').value;    
        });

        updateDownload();
    });

    document.getElementById('js-body-custom-medium').addEventListener('input', () => {
        document.querySelectorAll('.js-body-medium').forEach((faceLayer) => {
            faceLayer.style.fill = document.getElementById('js-body-custom-medium').value;    
        });

        updateDownload();
    });

    document.getElementById('js-face-custom-light').addEventListener('input', () => {
        document.querySelectorAll('.js-face-light').forEach((faceLayer) => {
            faceLayer.style.fill = document.getElementById('js-face-custom-light').value;    
        });

        updateDownload();
    });

    document.getElementById('js-body-custom-light').addEventListener('input', () => {
        document.querySelectorAll('.js-body-light').forEach((faceLayer) => {
            faceLayer.style.fill = document.getElementById('js-body-custom-light').value;    
        });

        updateDownload();
    });

    updateDownload();
});