<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <h1>Ejercicio 6</h1>
            </head>
            <body>
                <h2> Apartado A</h2>
            <ol>
                <xsl:for-each select = "pelicula[directores/director[@nacimiento > 1960 ]]"/>
                    <li>
                    <xsl:value-of select="titulo"/>
                    </li>
            </ol>

                <h2>Apartado B</h2>

                <ol>
                    <xsl:for-each select = "[directores/directo]"/>
                    <xsl:sort select = "." order = "descending"/>
                    <li>
                        <xsl:value-of select = "."/>
                    </li>

                </ol>

                <h2>Apartado c</h2>

                <ol>
                    <xsl:for-each select = "peliculas/directores/director[@nacimineto > 1945]">
                    <li>
                        <xsl:value-of select = "@nombre"/>
                    </li>
                </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>