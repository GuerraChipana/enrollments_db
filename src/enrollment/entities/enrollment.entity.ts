import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'student_id', type: 'int', nullable: false })
  studentId: number; // Referencia lógica a users_db.user.id

  @Column({ name: 'course_id', type: 'int', nullable: false })
  courseId: number; // Referencia lógica a courses_db.course.id

  @CreateDateColumn({ name: 'enrolled_at', default: () => 'CURRENT_TIMESTAMP' })
  enrolledAt: Date;

  @Column({
    type: 'enum',
    enum: ['active', 'dropped', 'completed'],
    default: 'active',
  })
  status: 'active' | 'dropped' | 'completed';
}