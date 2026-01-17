(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension must be run unsandboxed');
    }

    class MerhabaExtension {
        getInfo() {
            return {
                id: 'merhaba',
                name: 'Merhaba',
                blocks: [
                    {
                        opcode: 'merhabaYaz',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'merhaba yaz'
                    }
                ]
            };
        }

        merhabaYaz() {
            console.log('Merhaba Dünya!');
        }
    }

    Scratch.extensions.register(new MerhabaExtension());
})(Scratch);
