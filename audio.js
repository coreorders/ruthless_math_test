const SoundManager = {
    ctx: null,
    masterGain: null,
    isMuted: false,

    init: function () {
        if (!this.ctx) {
            console.log("SoundManager Initialized (SFX Only)");
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = 0.3; // 전체 볼륨
            this.masterGain.connect(this.ctx.destination);
        }
    },

    // BGM 기능 제거됨 (인터페이스 유지를 위해 빈 함수)
    playBGM: function () { },
    stopBGM: function () { },

    playSFX: function (type) {
        if (this.isMuted) return;
        this.init();
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.masterGain);

        switch (type) {
            case 'click':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(800, now);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
                break;
            case 'correct':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.5);
                osc.start(now);
                osc.stop(now + 0.5);
                break;
            case 'wrong':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(100, now);
                osc.frequency.linearRampToValueAtTime(50, now + 0.3);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
                break;
            case 'gameOver':
                osc.type = 'square';
                osc.frequency.setValueAtTime(50, now);
                gain.gain.setValueAtTime(0.5, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 2);
                osc.start(now);
                osc.stop(now + 2);
                break;
        }
    }
};

window.SoundManager = SoundManager;
