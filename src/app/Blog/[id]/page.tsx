"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronRight,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import PostHeader from "../../../components/reutilizable/PostHeader";
import PostSection from "./blogPostDetailComponents/CardSection";

export default function BlogPostDetail(): JSX.Element {
  const post = {
    title: "Mi primera app fullstack: Del miedo a la confianza",
    excerpt:
      "La historia de cómo creé mi primer e-commerce completo y me adentré al mundo más profesional del desarrollo web.",
    date: "15 Dic 2024",
    readTime: "5 min",
    category: "Experiencia",
    image:
      "/placeholder.svg?height=400&width=800&text=Mi+Primera+App+Fullstack",
    likes: 24,
    comments: 8,
  };

  return (
    <div className="min-h-screen bg-color-to-b text-white pt-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navegación simple */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-cyan-300/70">
            <Link
              href="/Blog"
              className="hover:text-cyan-300 transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cyan-200">{post.category}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-cyan-300 hover:text-cyan-200 hover:bg-cyan-900/20 p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
        </nav>

        {/* PostHeader component */}
        <PostHeader post={post} />

        <div className="grid  gap-8">
          {/* Main content */}
          <main>
            <article className="space-y-6">
              <PostSection>
                <p className="text-cyan-100/90 leading-relaxed">
                  Recuerdo perfectamente el momento en que decidí crear mi
                  primera aplicación fullstack. Llevaba meses haciendo proyectos
                  de frontend, pero siempre me quedaba con esa sensación de que
                  algo faltaba. Quería crear algo <em>real</em>, algo que
                  funcionara de principio a fin.
                </p>
                <p className="text-cyan-100/90 leading-relaxed">
                  La idea era simple: un e-commerce. Pero lo que no sabía era
                  que este proyecto me iba a cambiar completamente la
                  perspectiva sobre el desarrollo web.
                </p>
              </PostSection>

              <PostSection>
                <h2 className="text-xl font-bold text-cyan-300">
                  El primer obstáculo: La autenticación
                </h2>
                <p className="text-cyan-100/90 leading-relaxed">
                  Hasta ese momento, todos mis proyectos eran estáticos o usaban
                  localStorage para "simular" usuarios. Pero ahora necesitaba
                  algo real: registro, login, sesiones... y ahí fue cuando me
                  topé con el mundo de los{" "}
                  <strong className="text-cyan-300">JWT tokens</strong> y las{" "}
                  <strong className="text-cyan-300">cookies</strong>.
                </p>
                <p className="text-cyan-100/90 leading-relaxed">
                  Al principio era abrumador. ¿Qué es un refresh token? ¿Por qué
                  necesito cookies httpOnly? ¿Cómo manejo la expiración de
                  sesiones? Pasé días leyendo documentación, viendo videos y,
                  sobre todo, rompiendo cosas.
                </p>
                <div className="bg-cyan-800/20 border-l-4 border-cyan-400 p-4 rounded">
                  <p className="text-cyan-200 text-sm italic">
                    "El momento 'aha' llegó cuando finalmente entendí que la
                    seguridad no es algo que agregas al final, sino que debe
                    estar desde el primer día."
                  </p>
                </div>
              </PostSection>

              <PostSection>
                <h2 className="text-xl font-bold text-cyan-300">
                  Construyendo el backend: Mi zona de confort
                </h2>
                <p className="text-cyan-100/90 leading-relaxed">
                  Decidí usar{" "}
                  <strong className="text-cyan-300">Node.js con Express</strong>{" "}
                  porque ya tenía algo de experiencia con JavaScript. Pero crear
                  una API REST desde cero fue todo un desafío. Tuve que aprender
                  sobre:
                </p>
                <ul className="text-cyan-100/90 leading-relaxed space-y-2 ml-4">
                  <li>• Estructurar rutas de manera lógica</li>
                  <li>
                    • Validar datos de entrada (descubrí Zod y me cambió la
                    vida)
                  </li>
                  <li>• Manejar errores de forma consistente</li>
                  <li>• Conectar con PostgreSQL usando Prisma</li>
                </ul>
                <p className="text-cyan-100/90 leading-relaxed">
                  Lo que más me gustó fue ver cómo todo empezaba a conectarse.
                  El frontend hacía requests, el backend respondía, la base de
                  datos guardaba todo... era como ver una máquina funcionando
                  por primera vez.
                </p>
              </PostSection>

              <PostSection>
                <h2 className="text-xl font-bold text-cyan-300">
                  El frontend: Donde me sentía en casa
                </h2>
                <p className="text-cyan-100/90 leading-relaxed">
                  Para el frontend elegí{" "}
                  <strong className="text-cyan-300">Next.js</strong> porque
                  quería aprender sobre Server-Side Rendering y las nuevas
                  funcionalidades. Usar{" "}
                  <strong className="text-cyan-300">TypeScript</strong> fue una
                  decisión que al principio me frustró, pero que después
                  agradecí enormemente.
                </p>
                <p className="text-cyan-100/90 leading-relaxed">
                  El estado global lo manejé con{" "}
                  <strong className="text-cyan-300">Zustand</strong> - una
                  decisión que tomé después de pelearme con Redux durante una
                  semana. La simplicidad de Zustand me permitió enfocarme en la
                  lógica de negocio en lugar de en boilerplate.
                </p>
                <p className="text-cyan-100/90 leading-relaxed">
                  Ver el carrito de compras funcionando, la persistencia de
                  sesión, las rutas protegidas... cada pequeña funcionalidad que
                  implementaba me daba una satisfacción increíble.
                </p>
              </PostSection>

              <PostSection>
                <h2 className="text-xl font-bold text-cyan-300">
                  Lo que realmente aprendí
                </h2>
                <p className="text-cyan-100/90 leading-relaxed">
                  Este proyecto no solo me enseñó tecnologías nuevas. Me enseñó
                  a pensar como un desarrollador más profesional:
                </p>
                <div className="space-y-3">
                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-3">
                    <p className="text-green-300 font-medium text-sm">
                      ✨ La importancia de planificar antes de codear
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-3">
                    <p className="text-green-300 font-medium text-sm">
                      🔒 La seguridad debe ser una prioridad, no una ocurrencia
                      tardía
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-3">
                    <p className="text-green-300 font-medium text-sm">
                      🧪 Los tests no son opcionales en aplicaciones reales
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-3">
                    <p className="text-green-300 font-medium text-sm">
                      📚 La documentación es tu mejor amiga (y enemiga a veces)
                    </p>
                  </div>
                </div>
              </PostSection>

              <PostSection>
                <h2 className="text-xl font-bold text-cyan-300">
                  El resultado
                </h2>
                <p className="text-cyan-100/90 leading-relaxed">
                  Después de 3 meses de trabajo (entre estudios y trabajo),
                  tenía mi primera aplicación fullstack funcionando. No era
                  perfecta, tenía bugs, el código podría ser mejor... pero{" "}
                  <strong className="text-cyan-300">funcionaba</strong>.
                </p>
                <p className="text-cyan-100/90 leading-relaxed">
                  Más importante aún, había cruzado esa barrera mental que
                  separa a alguien que "sabe hacer páginas web" de alguien que
                  puede crear aplicaciones completas. Me sentía, por primera
                  vez, como un desarrollador de verdad.
                </p>
                <p className="text-cyan-100/90 leading-relaxed">
                  Este proyecto me abrió las puertas a entender conceptos más
                  avanzados: arquitectura de software, patrones de diseño,
                  escalabilidad... Fue mi puerta de entrada al desarrollo
                  profesional.
                </p>
              </PostSection>
            </article>

            {/* Call to action simple */}
            <PostSection>
              <p className="text-cyan-200/80 text-sm leading-relaxed">
                ¿Te gustó esta historia? Me encantaría conocer tu experiencia
                con tu primera app fullstack
              </p>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 font-medium transition-all duration-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comentar
              </Button>
            </PostSection>
          </main>

          {/* Sidebar simple */}
          <aside className="lg:col-span-1 sticky top-16">
            <PostSection>
              <h3 className="text-cyan-300 font-semibold">
                Seguime en mis redes
              </h3>
              <div className="grid justify-center items-center grid-cols-2 gap-2">
                <Link href="https://x.com/juan_p_dev" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/juan-p-dev/"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                </Link>
              </div>
            </PostSection>
          </aside>
        </div>
      </div>
    </div>
  );
}
