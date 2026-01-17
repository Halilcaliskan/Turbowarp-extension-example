(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('UNSANDBOXED GEREKLİ');
    }

    class Example {
        getInfo() {
            return {
                id: 'example',
                name: 'Example',
                blocks: [
                    {
                        opcode: 'hello',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'merhaba yaz'
                    }
                ]
            };
        }

        hello() {
            console.log('MERHABA');
        }
    }

    Scratch.extensions.register(new Example());
})(Scratch);
