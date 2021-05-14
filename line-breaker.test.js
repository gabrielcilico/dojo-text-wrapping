const lineBreaker = require('./line-breaker');

test('deve quebrar frase em três linhas', () => {
    let result = lineBreaker.break('Um pequeno jabuti xereta viu dez cegonhas felizes.', 20)
    let resultTotalLines = result.split('\n').length

    expect(result).toBe('Um pequeno jabuti\nxereta viu dez\ncegonhas felizes.');
    expect(resultTotalLines).toBe(3);
});

test('não deve quebrar palavra menor que número de colunas', () => {
    let result = lineBreaker.break('Gabriel', 20)

    expect(result).toBe('Gabriel');
    expect(result.includes('\n')).toBe(false);
});

test('não deve quebrar frase menor que número de colunas', () => {
    let result = lineBreaker.break('Gabriel Cilico', 20)

    expect(result).toBe('Gabriel Cilico');
    expect(result.includes('\n')).toBe(false);
});

test('não deve palavra maior que número de colunas', () => {
    let result = lineBreaker.break('EuSouGabrielCilicoLeite', 20)

    expect(result).toBe('EuSouGabrielCilicoLeite');
    expect(result.includes('\n')).toBe(false);
});