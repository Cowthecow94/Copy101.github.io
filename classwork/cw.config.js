self.__uv$config = {
    prefix: '/uv/',

    /* Bare server URL */ 
    bare: 'https://dw5pdmvyc2fs-dw5ibg9ja2vy.io2lx7.workers.dev/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: './classwork/cw.handler.js',
    client: './classwork/cw.client.js',
    bundle: './classwork/cw.bundle.js',
    config: './classwork/cw.config.js',
    sw: './classwork/cw.sw.js',
};
