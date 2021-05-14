class LineBreaker {

    break(text, columns) {

        const SPACE_SIZE = 1
        let words = text.split(' ')
        let lines = []
        let currentLine = ''

        if (text.length <= columns || words.length === 1)
            return text

        for (let x = 0; x < words.length; x++) {
            let word = words[x]
            let currentLineNotEmpty = currentLine.length > 0

            if (currentLineNotEmpty & currentLine.length + word.length + SPACE_SIZE <= columns) {
                currentLine += ` ${word}`
                if (x + 1 != words.length) continue
            }


            if (currentLineNotEmpty) lines.push(currentLine)
            currentLine = word
        }

        return lines.join('\n')
    }
}

module.exports = new LineBreaker()