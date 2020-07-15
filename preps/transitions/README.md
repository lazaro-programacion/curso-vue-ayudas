# transitions

## Clases de Transición
Existen cuatro clases aplicadas para transiciones de entrada/salida.

- v-enter: Estado inicial para entrada. Aplicada antes que el elemento sea insertado, se elimina después de un frame.
- v-enter-active: Estado activo y de finalización para entrada. Aplicada antes que el elemento sea insertado, se elimina cuando la animación/transición finaliza.
- v-leave: Estado inicial para salida. Aplicada cuando la transición de salida es activada, se elimina después de un frame.
- v-leave-active: Estado activo y de finalización para salida. Aplicada cuando la transición de salida es activada, se elimina cuando la animación/transición finaliza.

!('./transition.png')
