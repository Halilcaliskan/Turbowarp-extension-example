(function (Scratch) {
    'use strict';

    // 🔴 BU KONTROL ŞART
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This extension must be loaded unsandboxed');
    }

    class TestExtension {
        getInfo() {
            return {
                id: 'testext',
                name: 'Test',
                blocks: [
                    {
                        opcode: 'testBlock',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'test blok'
                    }
                ]
            };
        }

        testBlock() {
            console.log('ÇALIŞIYOR');
        }
    }

    Scratch.extensions.register(new TestExtension());
})(Scratch);
