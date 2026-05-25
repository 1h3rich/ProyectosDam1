<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method ="text" encoding="UTF-8"/>
    <xsl:template match="/empleados">    
        <xsl:text>ID;Nombre;Departamento;Salario</xsl:text>

        <xsl:for-each select="empleado">
            <xsl:value-of select="@id"/>
            <xsl:text>;</xsl:text>

            <xsl:value-of select="nombre"/>
            <xsl:text>;</xsl:text>

            <xsl:value-of select="departamento"/>
            <xsl:text>;</xsl:text>

            <xsl:value-of select="salario"/>
            <xsl:text>;</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>