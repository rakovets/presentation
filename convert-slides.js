// Load Asciidoctor.js and the reveal.js converter
var asciidoctor = require('@asciidoctor/core')()
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()

// Convert the document 'presentation.adoc' using the reveal.js converter
var options = {
    safe: 'safe',
    backend: 'revealjs',
    attributes: [
        'revealjsdir=https://cdn.jsdelivr.net/npm/reveal.js@3.9.2',
        'revealjs_theme=white',
        'revealjs_slideNumber=true',
        'source-highlighter=highlightjs',
        'highlightjs-theme=https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/styles/vs.min.css',
        'customcss=/assets/css/custom.css',
        'highlightjs-languages: xml, java, json, html, css'
    ]
}

// Root
asciidoctor.convertFile('./index.adoc', options)

// Course: "Core Java"
asciidoctor.convertFile('./java/core/code-convention.adoc', options)
asciidoctor.convertFile('./java/core/intro.adoc', options)
asciidoctor.convertFile('./java/core/data-types.adoc', options)
asciidoctor.convertFile('./java/core/operators.adoc', options)
asciidoctor.convertFile('./java/core/methods.adoc', options)
asciidoctor.convertFile('./java/core/decision-making-statements.adoc', options)
asciidoctor.convertFile('./java/core/looping-statements.adoc', options)
asciidoctor.convertFile('./java/core/array.adoc', options)
asciidoctor.convertFile('./java/core/oop-classes-and-objects.adoc', options)
asciidoctor.convertFile('./java/core/oop-principles.adoc', options)
asciidoctor.convertFile('./java/core/modifiers.adoc', options)
asciidoctor.convertFile('./java/core/nested-classes.adoc', options)
asciidoctor.convertFile('./java/core/class-object.adoc', options)
asciidoctor.convertFile('./java/core/class-arrays.adoc', options)
asciidoctor.convertFile('./java/core/enum.adoc', options)
asciidoctor.convertFile('./java/core/string.adoc', options)
asciidoctor.convertFile('./java/core/regex.adoc', options)
asciidoctor.convertFile('./java/core/wrapper-classes.adoc', options)
asciidoctor.convertFile('./java/core/generic-types.adoc', options)
asciidoctor.convertFile('./java/core/java-collection-framework.adoc', options)
asciidoctor.convertFile('./java/core/exception-handling.adoc', options)
asciidoctor.convertFile('./java/core/java-io.adoc', options)
asciidoctor.convertFile('./java/core/properties.adoc', options)
asciidoctor.convertFile('./java/core/functional-interface.adoc', options)
asciidoctor.convertFile('./java/core/lambda-expressions.adoc', options)
asciidoctor.convertFile('./java/core/date-and-time.adoc', options)
asciidoctor.convertFile('./java/core/reflection.adoc', options)
asciidoctor.convertFile('./java/core/annotations.adoc', options)
asciidoctor.convertFile('./java/core/concurrency.adoc', options)
asciidoctor.convertFile('./java/core/concurrency-thread-synchronization.adoc', options)
asciidoctor.convertFile('./java/core/concurrent-utilities.adoc', options)
asciidoctor.convertFile('./java/core/i18n.adoc', options)
asciidoctor.convertFile('./java/core/javadoc.adoc', options)
asciidoctor.convertFile('./java/core/xml.adoc', options)
asciidoctor.convertFile('./java/core/networking.adoc', options)
asciidoctor.convertFile('./java/core/system-classes.adoc', options)
asciidoctor.convertFile('./java/core/jmm.adoc', options)

// Course: "Java Tools"
asciidoctor.convertFile('./java/tools/logging.adoc', options)
asciidoctor.convertFile('./java/tools/junit.adoc', options)
asciidoctor.convertFile('./java/tools/apache-maven.adoc', options)
asciidoctor.convertFile('./java/tools/apache-tomcat.adoc', options)

// Course: "Data persistence in Java"
asciidoctor.convertFile('./java/data-persistence/database-connection-pool.adoc', options)
asciidoctor.convertFile('./java/data-persistence/intro-jpa.adoc', options)
asciidoctor.convertFile('./java/data-persistence/intro-hibernate.adoc', options)
asciidoctor.convertFile('./java/data-persistence/mapping.adoc', options)
asciidoctor.convertFile('./java/data-persistence/query-language.adoc', options)

// Course: "Java with Jakarta EE"
asciidoctor.convertFile('./java/jakarta-ee/java-enterprise.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/servlet.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/jsp.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/jstl.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/el.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/filter.adoc', options)
asciidoctor.convertFile('./java/jakarta-ee/i18n.adoc', options)

// Course: "Java with Spring"
asciidoctor.convertFile('./java/spring/intro-spring.adoc', options)
asciidoctor.convertFile('./java/spring/beans.adoc', options)
asciidoctor.convertFile('./java/spring/spring-orm.adoc', options)
asciidoctor.convertFile('./java/spring/spring-webmvc.adoc', options)

// Common themes
asciidoctor.convertFile('./common/programming-languages.adoc', options)
asciidoctor.convertFile('./common/hardware-resources.adoc', options)
asciidoctor.convertFile('./common/git.adoc', options)
asciidoctor.convertFile('./common/testing.adoc', options)
asciidoctor.convertFile('./common/data-structures.adoc', options)
asciidoctor.convertFile('./common/uml.adoc', options)
asciidoctor.convertFile('./common/design-principles.adoc', options)
asciidoctor.convertFile('./common/design-patterns.adoc', options)
asciidoctor.convertFile('./common/i18n.adoc', options)
asciidoctor.convertFile('./common/architectural-patterns.adoc', options)
asciidoctor.convertFile('./common/xml.adoc', options)
asciidoctor.convertFile('./common/json.adoc', options)
asciidoctor.convertFile('./common/scrum.adoc', options)
asciidoctor.convertFile('./common/regex.adoc', options)

// Course: "SQL"
asciidoctor.convertFile('./sql/database-normalization.adoc', options)

// Course: "HTML and CSS"
asciidoctor.convertFile('./html-and-css/form.adoc', options)
asciidoctor.convertFile('./html-and-css/link.adoc', options)
asciidoctor.convertFile('./html-and-css/text-markup.adoc', options)
asciidoctor.convertFile('./html-and-css/html-tables.adoc', options)
asciidoctor.convertFile('./html-and-css/css-intro.adoc', options)
asciidoctor.convertFile('./html-and-css/css-float.adoc', options)
